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
      a: ['href', 'target'],
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
      div: ['align']
    },
    allowedSchemes: ['http', 'https'],
    allowedSchemesByTag: {
      img: ['data', 'src']
    },
    // allowedStyles: {},
    transformTags: {
      a: (tagName, attribs) => {
        let href = attribs.href;
        const { host } = window.location;
        const aHost = new URL(href).host;

        if (host !== aHost && !href.includes('/public-url/')) {
          const base64Url = Buffer.from(href, 'utf8').toString('base64');
          href = `/#/public-url/?u=${base64Url}`;
        }

        if (href) {
          attribs.href = href;
        }
        attribs.target = '_blank';

        return {
          tagName: 'a',
          attribs: attribs
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
