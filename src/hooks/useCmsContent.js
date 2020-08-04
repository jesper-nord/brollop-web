import { useState, useEffect } from 'react';
import { request } from 'graphql-request';
import { GRAPHCMS_ENDPOINT, getPageContentQuery } from '../util/query';

export const useCmsContent = contentId => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);
      const { pageContent } = await request(GRAPHCMS_ENDPOINT, getPageContentQuery(contentId));
      setContent(pageContent.textContent);
      setLoading(false);
    };

    fetchContent();
  }, [contentId]);

  return [content, loading];
};
