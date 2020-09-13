import { useState, useEffect } from 'react';
import { request, gql } from 'graphql-request';

const GRAPHCMS_ENDPOINT = 'https://api-eu-central-1.graphcms.com/v2/ckc7ycwra09i001xr559jgvds/master';

export const useCmsContent = contentId => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);
      const { pageContent } = await request(
        GRAPHCMS_ENDPOINT,
        gql`
          {
            pageContent(where: { 
              id: "${contentId}" 
            }) {
              textContent {
                html
              }
            }
          }
        `
      );
      setContent(pageContent.textContent);
      setLoading(false);
    };

    fetchContent();
  }, [contentId]);

  return [content, loading];
};
