import React from 'react';
import { useCmsContent } from '../../hooks/useCmsContent';
import { parseHtml } from '../../util/parseHtml';
import { Spinner } from '../../components';

export const Accomondation = ({ contentId }) => {
  const [content] = useCmsContent(contentId);

  if (!content) {
    return <Spinner />
  }

  return (
    <article>
      {content.map(pageContent => <section>{parseHtml(pageContent.html)}</section>)}
      <section>
        <p>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8132.179561869568!2d17.854755!3d59.3655897!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdd0303435f53f7ec!2sHesselby%20Slott!5e0!3m2!1ssv!2sse!4v1580044827451!5m2!1ssv!2sse' 
            frameBorder='0'
            width='100%'
            height='420px'
            title='Karta Hesselby Slott'
          />
        </p>
      </section>
    </article>
  );
}
