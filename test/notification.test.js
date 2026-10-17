import { jest, test, expect } from '@jest/globals';

globalThis.window = {
  localStorage: {
    getItem: (k) =>
      k === 'yartu-token' ? 'tok' : k === 'yartu-device-id' ? 'dev-1' : null,
    setItem: () => {}
  }
};

const { default: factory } = await import('../src/Notification/index.js');
const Notification = factory({});

const response = (code = 0) => ({
  getCode: () => code,
  getPushkey: () => 'pk',
  getMessage: () => (code == 0 ? 'SUCCESS' : 'FAIL'),
  getEnabled: () => true,
  getVapidPublicKey: () => 'BPk'
});

const make = (rpc, res, err = null) => {
  const n = new Notification({ endpoint: 'http://x' });
  n.client = { [rpc]: jest.fn((req, md, cb) => cb(err, res)) };
  return n;
};

test('registerPushClient sets request fields and resolves', async () => {
  const n = make('registerPushClient', response());
  const res = await n.registerPushClient({
    kind: 'webpush',
    endpoint: 'https://e',
    p256dh: 'p',
    auth: 'a',
    deviceId: 'd1'
  });
  const [req, md] = n.client.registerPushClient.mock.calls[0];
  expect(req.getKind()).toBe('webpush');
  expect(req.getEndpoint()).toBe('https://e');
  expect(req.getP256dh()).toBe('p');
  expect(req.getAuth()).toBe('a');
  expect(req.getDeviceId()).toBe('d1');
  expect(req.getAppId()).toBe('io.yartu.suite');
  expect(req.getToken()).toBe('');
  expect(md).toEqual({ Authentication: 'tok' });
  expect(res).toEqual({ code: 0, pushkey: 'pk', message: 'SUCCESS' });
});

test('registerPushClient falls back to stored device id', async () => {
  const n = make('registerPushClient', response());
  await n.registerPushClient({ kind: 'fcm', token: 't' });
  expect(n.client.registerPushClient.mock.calls[0][0].getDeviceId()).toBe(
    'dev-1'
  );
});

test('registerPushClient rejects on non-zero code', async () => {
  const n = make('registerPushClient', response(400));
  await expect(n.registerPushClient({ kind: 'webpush' })).rejects.toEqual({
    code: 400,
    message: 'FAIL'
  });
});

test('registerPushClient rejects on grpc error', async () => {
  const n = make('registerPushClient', null, { code: 14, message: 'down' });
  await expect(n.registerPushClient({ kind: 'webpush' })).rejects.toEqual({
    code: 14,
    message: 'down'
  });
});

test('unregisterPushClient resolves and rejects', async () => {
  const n = make('unregisterPushClient', response());
  const res = await n.unregisterPushClient({ pushkey: 'k' });
  const req = n.client.unregisterPushClient.mock.calls[0][0];
  expect(req.getPushkey()).toBe('k');
  expect(req.getDeviceId()).toBe('');
  expect(res).toEqual({ code: 0, message: 'SUCCESS' });

  const bad = make('unregisterPushClient', response(404));
  await expect(bad.unregisterPushClient({ pushkey: 'k' })).rejects.toEqual({
    code: 404,
    message: 'FAIL'
  });
});

test('getPushConfig resolves with public key only', async () => {
  const n = make('getPushConfig', response());
  const res = await n.getPushConfig();
  expect(res).toEqual({
    code: 0,
    enabled: true,
    vapidPublicKey: 'BPk',
    message: 'SUCCESS'
  });
});
