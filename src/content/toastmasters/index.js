import React, { useState, useEffect } from 'react';
import { request } from 'graphql-request';

import { GRAPHCMS_ENDPOINT, getPageContentQuery } from '../../util/query';
import { parseHtml } from '../../util/parseHtml';
import { Presentation } from '../../components'
import daniela from '../../images/daniela.jpg'
import thomas from '../../images/thomas.jpg'

const PAGE_ID = 'ckcgg3gio0d4n0153embbxkp7';
const TOASTMADAME_ID = 'ckcgg5qb403xb0148dfjldnbp';
const TOASTMASTER_ID = 'ckcgg81n403xt0104hprsc95s';

export const Toastmasters = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      const data = await request(GRAPHCMS_ENDPOINT, getPageContentQuery(PAGE_ID));
      const dataToastmadame = await request(GRAPHCMS_ENDPOINT, getPageContentQuery(TOASTMADAME_ID));
      const dataToastmaster = await request(GRAPHCMS_ENDPOINT, getPageContentQuery(TOASTMASTER_ID));
      setContent({
        intro: data.pageContent.textContent,
        toastmadame: dataToastmadame.pageContent.textContent,
        toastmaster: dataToastmaster.pageContent.textContent
      })
    };

    fetchContent();
  }, []);

  if (!content) {
    return null;
  }

  return (
    <article>
      {content.intro.map(pageContent => <section>{parseHtml(pageContent.html)}</section>)}
      <Presentation title='Daniela' image={daniela}>
        {content.toastmadame.map(pageContent => <section>{parseHtml(pageContent.html)}</section>)}
      </Presentation>
      <Presentation title='Thomas' image={thomas}>
        {content.toastmaster.map(pageContent => <section>{parseHtml(pageContent.html)}</section>)}
      </Presentation>
    </article>
  );
}
