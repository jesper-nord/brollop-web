import React from 'react';
import { useCmsContent } from '../../hooks/useCmsContent';
import { parseHtml } from '../../util/parseHtml';
import { Presentation, Spinner } from '../../components'
import daniela from '../../images/daniela.jpg'
import thomas from '../../images/thomas.jpg'

const TOASTMADAME_ID = 'ckcgg5qb403xb0148dfjldnbp';
const TOASTMASTER_ID = 'ckcgg81n403xt0104hprsc95s';

export const Toastmasters = ({ contentId }) => {
  const [intro] = useCmsContent(contentId);
  const [toastmadame] = useCmsContent(TOASTMADAME_ID);
  const [toastmaster] = useCmsContent(TOASTMASTER_ID);

  if (!intro || !toastmadame || !toastmaster) {
    return <Spinner />
  }

  return (
    <article>
      {intro.map(textContent => <section>{parseHtml(textContent.html)}</section>)}
      <Presentation title='Daniela' image={daniela}>
        {toastmadame.map(textContent => <div>{parseHtml(textContent.html)}</div>)}
      </Presentation>
      <Presentation title='Thomas' image={thomas}>
        {toastmaster.map(textContent => <div>{parseHtml(textContent.html)}</div>)}
      </Presentation>
    </article>
  );
}
