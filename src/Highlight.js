import React  from 'react';

const withHighlighting = (text, highlight) => {
  console.log('withHighlighting ... ', text, highlight)
  const nr = new RegExp(`${highlight}`, "g")
  const nt = "<mark>"+highlight + "</mark>"
  return  text.replace(nr, nt);
};
export default withHighlighting;