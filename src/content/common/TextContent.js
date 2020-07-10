import React from 'react';
import { useCmsContent } from '../../hooks/useCmsContent';
import { parseHtml } from '../../util/parseHtml';
import { Spinner } from '../../components';

export const TextContent = ({ contentId }) => {
  const [content] = useCmsContent(contentId);

  if (!content) {
    return <Spinner />
  }
  
  return (
    <article>
      {content.map(textContent => <section>{parseHtml(textContent.html)}</section>)}
    </article>
  );
}
