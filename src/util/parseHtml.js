import React from 'react';
import ReactHtmlParser from 'react-html-parser';

export const parseHtml = html => ReactHtmlParser(html).map(decorate);

const decorate = node => {
  if (node.type === 'a') {
    return decorateLink(node);
  }
  if (node.props && Array.isArray(node.props.children)) {
    return React.cloneElement(node, {
      children: React.Children.map(node.props.children, decorate)
    })
  }
  return node;
}

const decorateLink = node => {
  if (!window.location.host.includes(new URL(node.props.href).host)) {
    // external link
    return React.cloneElement(node, {
      rel: 'noreferrer noopener',
      target: '_blank',
      children: React.Children.map(node.props.children, s => s.trim())
    })
  }
  return React.cloneElement(node, {
    children: React.Children.map(node.props.children, s => s.trim())
  })
}