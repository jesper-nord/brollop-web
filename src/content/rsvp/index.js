import React, { useState, useEffect } from 'react';
import { request } from 'graphql-request';

import { GRAPHCMS_ENDPOINT, getPageContentQuery } from '../../util/query';
import { parseHtml } from '../../util/parseHtml';
import { Spinner } from '../../components';

const PAGE_ID = 'ckcgfuo5s03to0148x2rbfhd7';

export const RSVP = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      const { pageContent } = await request(GRAPHCMS_ENDPOINT, getPageContentQuery(PAGE_ID));
      setContent(pageContent.textContent);
    };

    fetchContent();
  }, []);

  if (!content) {
    return <Spinner />
  }

  return (
    <article>
      {content.map(pageContent => <section>{parseHtml(pageContent.html)}</section>)}
    </article>
  );
}
