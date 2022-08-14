import { marked } from "marked";
import React from "react";
import Prism from "prismjs";

export default function Preview(props) {
  marked.setOptions({
    breaks: true,
    highlight: function (code) {
      return Prism.highlight(code, Prism.languages.javascript, "javascript");
    },
  });
  const renderer = new marked.Renderer();
  renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}</a>`;
  };
  return (
    <div
      id="preview"
      className="preview-pane"
      dangerouslySetInnerHTML={{ __html: marked(props.value, { renderer: renderer }) }}
    />
  );
}
