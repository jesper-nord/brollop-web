import { useState, useEffect } from 'react'
import { request } from 'graphql-request';
import { GRAPHCMS_ENDPOINT, getPageContentQuery } from '../util/query';

export const useCmsContent = contentId => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      const { pageContent } = await request(GRAPHCMS_ENDPOINT, getPageContentQuery(contentId));
      setContent(pageContent.textContent);
    };

    fetchContent();
  }, [contentId]);

  return [content];
}