import React, { useState, useEffect } from 'react';
import { request } from 'graphql-request';

import { GRAPHCMS_ENDPOINT, getPageContentQuery } from '../../util/query';
import { parseHtml } from '../../util/parseHtml';

const PAGE_ID = 'ckcggto6w043w014871is41p0';

export const Pictures = () => {
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
