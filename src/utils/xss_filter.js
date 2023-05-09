// eslint-disable-next-line unicorn/filename-case
import sanitizeHtml from 'sanitize-html';

export const xssOptions = (yartuAttach = {}) => {
  return {
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
      'title'
    ],
    allowedAttributes: {
      '*': ['style', 'width', 'height'],
      a: ['href', 'target', 'data-yartu'],
      img: ['src', 'border', 'width', 'height', 'id', 'style', 'yartu-name'],
      tbody: ['align', 'bgcolor', 'valign'],
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
      div: ['align', 'data-signature'],
      p: ['data-signature', 'data-type', 'data-signature', 'data-yartu']
    },
    allowedSchemes: ['http', 'https', 'mailto', 'tel'],
    allowedSchemesByTag: {
      img: ['data', 'src']
    },
    // allowedStyles: {},
    transformTags: {
      a: (tagName, attribs) => {
        const attribute = { ...attribs };
        let href = `${attribute.href}`;
        const { host } = window.location;

        if (
          href &&
          !href.includes('/public-url/') &&
          !href.includes('mailto:') &&
          !href.includes('tel:') &&
          !href.includes('fax:')
        ) {
          try {
            console.log('CHANGE URL');
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

          if (source.includes('cid:')) {
            attribs['yartu-name'] = 'yartu-attach-file';
            const cid = source.replace('cid:', '');
            source = `/file/attachment/${yartuAttach.uuid}?cid=${cid}`;
          } else if (!yartuName) {
            attribs['yartu-name'] = 'yartu-image';
            if (source.includes('//')) {
              const base64 = Buffer.from(attribs.src, 'utf8').toString(
                'base64'
              );
              source = `/assets/not.svg?base=/${base64}`;
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
};

export const sanitize = (uglyHtml, customOptions = {}, yartuAttach = {}) => {
  return sanitizeHtml(uglyHtml, {
    ...xssOptions(yartuAttach),
    ...customOptions
  });
};

export const sanitizeEmail = (emailData) => {
  return sanitize(emailData.body, {}, emailData);
};
