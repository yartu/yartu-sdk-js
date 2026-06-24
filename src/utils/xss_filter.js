// eslint-disable-next-line unicorn/filename-case
import DOMPurify from 'dompurify';

const purify = DOMPurify(window);

const ADD_TAGS = ['font', 'center'];
const ADD_ATTR = [
  'target',
  'align',
  'valign',
  'bgcolor',
  'background',
  'border',
  'cellpadding',
  'cellspacing',
  'color',
  'cols',
  'colspan',
  'rows',
  'rowspan',
  'face',
  'nowrap',
  'marginheight',
  'marginwidth',
  'hspace',
  'vspace',
  'alink',
  'vlink',
  'id',
  'style',
  'class',
  'yartu-name',
  'data-yartu',
  'data-yartu-href',
  'data-yartu-src',
  'data-signature',
  'data-type',
];

let ctx = { imgInlineList: [], uuid: undefined };

purify.addHook('afterSanitizeAttributes', (node) => {
  const tag = node.tagName;

  if (tag === 'A') {
    const original = node.getAttribute('href');
    if (!original) {
      return;
    }
    node.setAttribute('data-yartu-href', original);

    let href = original;
    const skipProtocols = new Set(['mailto:', 'tel:', 'fax:']);
    try {
      const parsed = new URL(href); // relative/invalid URL => catch
      const isSameHost = parsed.host === window.location.host;
      const isInternalPublicUrl =
        isSameHost && parsed.pathname.startsWith('/public/url/');
      if (
        !skipProtocols.has(parsed.protocol) &&
        !isInternalPublicUrl &&
        !isSameHost
      ) {
        const base64Url = Buffer.from(href, 'utf8').toString('base64');
        href = `/#/public/url/?u=${base64Url}`;
      }
    } catch {
      node.setAttribute('data-yartu', 'wrong-url');
    }

    node.setAttribute('href', href);
    node.setAttribute('target', '_blank');
    node.setAttribute('rel', 'noopener noreferrer');
    return;
  }

  if (tag === 'IMG') {
    const original = node.getAttribute('src');
    if (!original) {
      return;
    }
    const yartuName = node.getAttribute('yartu-name');
    node.setAttribute('data-yartu-src', original);

    let source = original;
    if (original.includes('cid:')) {
      node.setAttribute('yartu-name', 'yartu-attach-file');
      const cid = original.replace('cid:', '');
      source = `/file/attachment/${ctx.uuid}?cid=${cid}`;
      ctx.imgInlineList.push(cid);
    } else if (!yartuName) {
      node.setAttribute('yartu-name', 'yartu-image');
      if (/^https?:\/\//i.test(original) || original.startsWith('//')) {
        const base64 = Buffer.from(original, 'utf8').toString('base64');
        source = `/img/not-allowed.png?base=/${base64}`;
      }
    }

    node.setAttribute('src', source);
  }
});

export const xssOptions = () => ({
  options: { ADD_TAGS, ADD_ATTR },
  imgInlineList: [],
});

export const sanitize = (uglyHtml, customOptions = {}, yartuAttach = {}) => {
  ctx = { imgInlineList: [], uuid: yartuAttach.uuid };
  const sanitizeResponse = purify.sanitize(uglyHtml || '', {
    ADD_TAGS,
    ADD_ATTR,
    ...customOptions,
  });

  return {
    sanitize: sanitizeResponse,
    imgInlineList: ctx.imgInlineList,
  };
};

export const sanitizeEmail = (emailData) => {
  return sanitize(emailData.body, {}, emailData);
};
