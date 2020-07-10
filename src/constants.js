import { parseISO } from 'date-fns'

export const GA_KEY = 'UA-159992142-1'
export const WEDDING_DATE = parseISO('2020-09-05T14:30:00')
export const DOMAIN = 'ulrikajesper2020.se'
export const EMAILS = {
  TOASTMASTERS: `toastmasters@${DOMAIN}`,
  RSVP: `osa@${DOMAIN}`
}


export const GRAPHCMS_ENDPOINT = 'https://api-eu-central-1.graphcms.com/v2/ckc7ycwra09i001xr559jgvds/master'

export const getPageContentQuery = id => {
  return `
    {
      pageContent(where: { 
        id: "${id}" 
      }) {
        textContent {
          html
        }
      }
    }
  `
}