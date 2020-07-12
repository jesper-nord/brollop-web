export const GRAPHCMS_ENDPOINT = 'https://api-eu-central-1.graphcms.com/v2/ckc7ycwra09i001xr559jgvds/master';

export const getPageContentQuery = id => `
    {
      pageContent(where: { 
        id: "${id}" 
      }) {
        textContent {
          html
        }
      }
    }
  `;
