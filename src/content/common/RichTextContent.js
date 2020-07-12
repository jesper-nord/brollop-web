import React from 'react';
import { useCmsContent } from '../../hooks/useCmsContent';
import { parseHtml } from '../../util/parseHtml';
import { Spinner } from '../../components';

export const RichTextContent = ({ contentId }) => {
  const [content, loading] = useCmsContent(contentId);

  if (loading) {
    return <Spinner />
  }
  
  return (
    <article>
      {content.map(textContent => <section>{parseHtml(textContent.html)}</section>)}
    </article>
  );
}
