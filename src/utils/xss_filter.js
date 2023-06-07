// eslint-disable-next-line unicorn/filename-case
// TODO :: all actions should be dynamic. from main @akucuk
import sanitizeHtml from 'sanitize-html';

export const xssOptions = (yartuAttach = {}) => {
  const imgInlineList = [];
  const options = {
    allowedTags: [
      ...sanitizeHtml.defaults.allowedTags,
      'img',
      'h1',
      'h2',
      'span',
      'em',
      'b',
      'blockquote',
      'strong',
      'table',
      'tbody',
      'center',
      'font',
      'title',
      'link',
      'head',
      'html'
    ],
    allowedAttributes: {
      '*': [
        'height',
        'width',
        'style',
        'align',
        'alink',
        'alt',
        'bgcolor',
        'border',
        'cellpadding',
        'cellspacing',
        'class',
        'color',
        'cols',
        'colspan',
        'coords',
        'dir',
        'face',
        'hspace',
        'ismap',
        'lang',
        'marginheight',
        'marginwidth',
        'multiple',
        'nohref',
        'noresize',
        'noshade',
        'nowrap',
        'ref',
        'rel',
        'rev',
        'rows',
        'rowspan',
        'scrolling',
        'shape',
        'span',
        'summary',
        'tabindex',
        'title',
        'usemap',
        'valign',
        'value',
        'vlink',
        'vspace',
        'data-yartu-href',
        'data-yartu-src'
      ],
      a: ['href', 'target', 'data-yartu'],
      img: ['src', 'border', 'width', 'height', 'id', 'style', 'yartu-name'],
      td: [
        'colspan',
        'headers',
        'rowspan',
        'abbr',
        'char',
        'charoff',
        'scope',
        'align',
        'valign',
        'bgcolor',
        'width',
        'height'
      ],
      tr: ['align', 'valign', 'bgcolor', 'width', 'height'],
      table: [
        'background',
        'bgcolor',
        'frame',
        'rules',
        'summary',
        'border',
        'cellpadding',
        'cellspacing',
        'header-table',
        'align',
        'width',
        'style'
      ],
      link: ['href', 'rel'],
      div: ['align', 'data-signature', 'data-type'],
      p: ['data-signature', 'data-type', 'data-yartu']
    },
    allowedSchemes: ['http', 'https', 'mailto', 'tel'],
    allowedSchemesByTag: {
      img: ['data', 'src']
    },
    transformTags: {
      a: (tagName, attribs) => {
        const attribute = { ...attribs };
        let href = `${attribute.href}`;
        const { host } = window.location;

        attribute['data-yartu-href'] = href;

        if (
          href &&
          !href.includes('/public-url/') &&
          !href.includes('mailto:') &&
          !href.includes('tel:') &&
          !href.includes('fax:')
        ) {
          try {
            const aHost = new URL(href).host;
            if (host !== aHost) {
              const base64Url = Buffer.from(href, 'utf8').toString('base64');
              href = `/#/public-url/?u=${base64Url}`;
            }
          } catch {
            // pass
            attribute['data-yartu'] = 'wrong-url';
          }
        }

        if (href) {
          attribute.href = href;
        }

        attribute.target = '_blank';

        return {
          tagName: 'a',
          attribs: attribute
        };
      },
      img: (tagName, attribs) => {
        let source = attribs.src;
        if (source) {
          const yartuName = attribs['yartu-name'];
          attribs['data-yartu-src'] = source;

          if (source.includes('cid:')) {
            attribs['yartu-name'] = 'yartu-attach-file';
            const cid = source.replace('cid:', '');
            source = `/file/attachment/${yartuAttach.uuid}?cid=${cid}`;
            imgInlineList.push(cid);
          } else if (!yartuName) {
            attribs['yartu-name'] = 'yartu-image';
            if (source.includes('//')) {
              const base64 = Buffer.from(attribs.src, 'utf8').toString(
                'base64'
              );
              source = `/img/not-allowed.png?base=/${base64}`;
            }
          }
        }

        if (source) {
          attribs.src = source;
        }

        return {
          tagName: 'img',
          attribs
        };
      }
    }
  };
  return {
    options,
    imgInlineList
  };
};

export const sanitize = (uglyHtml, customOptions = {}, yartuAttach = {}) => {
  const { options, imgInlineList } = xssOptions(yartuAttach);
  const sanitizeResponse = sanitizeHtml(uglyHtml, {
    ...options,
    ...customOptions
  });

  return {
    sanitize: sanitizeResponse,
    imgInlineList
  };
};

export const sanitizeEmail = (emailData) => {
  return sanitize(emailData.body, {}, emailData);
};
