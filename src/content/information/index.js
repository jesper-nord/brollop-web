import React, { useState, useEffect } from 'react';
import { request } from 'graphql-request';

import { GRAPHCMS_ENDPOINT, getPageContentQuery } from '../../util/query';
import { parseHtml } from '../../util/parseHtml';

const PAGE_ID = 'ckc7ylsmg0iir01545re6b3n4';

export const Information = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      const { pageContent } = await request(GRAPHCMS_ENDPOINT, getPageContentQuery(PAGE_ID));
      setContent(pageContent.textContent);
    };

    fetchContent();
  }, []);

  if (!content) {
    return null;
  }

  return (
    <article>
      {content.map(pageContent => <section>{parseHtml(pageContent.html)}</section>)}
    </article>
  );
}
