import React from 'react';
import { RichTextContent } from '../common/RichTextContent';
import { useCmsContent } from '../../hooks/useCmsContent';
import { parseHtml } from '../../util/parseHtml';
import { Presentation, Spinner } from '../../components';
import daniela from '../../images/daniela.jpg';
import thomas from '../../images/thomas.jpg';

const TOASTMADAME_ID = 'ckcgg5qb403xb0148dfjldnbp';
const TOASTMASTER_ID = 'ckcgg81n403xt0104hprsc95s';

export const Toastmasters = ({ contentId }) => {
  const [toastmadame, loading1] = useCmsContent(TOASTMADAME_ID);
  const [toastmaster, loading2] = useCmsContent(TOASTMASTER_ID);

  if (loading1 || loading2) {
    return <Spinner />;
  }

  return (
    <>
      <RichTextContent contentId={contentId} />
      <article>
        <section>
          <Presentation title="Daniela" image={daniela}>
            {toastmadame.map((textContent, i) => <div key={i}>{parseHtml(textContent.html)}</div>)}
          </Presentation>
          <Presentation title="Thomas" image={thomas}>
            {toastmaster.map((textContent, i) => <div key={i}>{parseHtml(textContent.html)}</div>)}
          </Presentation>
        </section>
      </article>
    </>
  );
};
