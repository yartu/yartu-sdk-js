import { jest, test, expect } from '@jest/globals';

const store = { 'yartu-token': 'tok', 'yartu-device-id': 'dev-1' };
globalThis.window = {
  localStorage: {
    getItem: (k) => store[k] ?? null,
    setItem: (k, v) => {
      store[k] = v;
    }
  }
};

const { default: factory } = await import('../src/Chat/index.js');
const Chat = factory({});

const response = (code = 0) => ({
  getCode: () => code,
  getMessage: () => (code == 0 ? 'SUCCESS' : 'FAIL'),
  getEnabled: () => true,
  getHomeserverUrl: () => 'https://chat.example',
  getServerName: () => 'example',
  getUserId: () => '@u:example',
  getPushGatewayUrl: () => 'https://push.example',
  getToken: () => 'jwt',
  getExpiresIn: () => 60
});

const make = (rpc, res, err = null) => {
  const c = new Chat({ endpoint: 'http://x' });
  c.client = { [rpc]: jest.fn((req, md, cb) => cb(err, res)) };
  return c;
};

test('getChatConfig resolves with config fields', async () => {
  const c = make('getChatConfig', response());
  const res = await c.getChatConfig();
  expect(c.client.getChatConfig.mock.calls[0][1]).toEqual({
    Authentication: 'tok'
  });
  expect(res).toEqual({
    code: 0,
    enabled: true,
    homeserverUrl: 'https://chat.example',
    serverName: 'example',
    userId: '@u:example',
    pushGatewayUrl: 'https://push.example',
    message: 'SUCCESS'
  });
});

test('getChatConfig rejects on 403', async () => {
  const c = make('getChatConfig', response(403));
  await expect(c.getChatConfig()).rejects.toEqual({
    code: 403,
    message: 'FAIL'
  });
});

test('getChatLoginToken resolves with token and device id', async () => {
  const c = make('getChatLoginToken', response());
  const res = await c.getChatLoginToken();
  expect(res).toEqual({
    code: 0,
    token: 'jwt',
    expiresIn: 60,
    deviceId: 'YARTU_dev-1',
    message: 'SUCCESS'
  });
});

test.each([429, 503])('getChatLoginToken rejects on %i', async (code) => {
  const c = make('getChatLoginToken', response(code));
  await expect(c.getChatLoginToken()).rejects.toEqual({
    code,
    message: 'FAIL'
  });
});

test('grpc error rejects through handleError', async () => {
  const c = make('getChatConfig', null, { code: 14, message: 'down' });
  await expect(c.getChatConfig()).rejects.toEqual({
    code: 14,
    message: 'down'
  });
  const t = make('getChatLoginToken', null, { code: 14, message: 'down' });
  await expect(t.getChatLoginToken()).rejects.toEqual({
    code: 14,
    message: 'down'
  });
});

test('getChatDeviceId is stable', () => {
  const c = make('getChatConfig', response());
  expect(c.getChatDeviceId()).toBe('YARTU_dev-1');
  expect(c.getChatDeviceId()).toBe('YARTU_dev-1');
});

test('getChatDeviceId persists a generated id', () => {
  delete store['yartu-device-id'];
  const c = make('getChatConfig', response());
  const first = c.getChatDeviceId();
  expect(first).toMatch(/^YARTU_.+/);
  expect(store['yartu-device-id']).toBe(first.slice('YARTU_'.length));
  expect(c.getChatDeviceId()).toBe(first);
});
