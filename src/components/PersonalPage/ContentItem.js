import React from 'react';

const ContentItem = props => {
  let content = <div/>;
  if (props.show) {
    content = (
      <div>
        <p>{props.content}</p>
      </div>
    )
  }
  return content;
}

export default ContentItem;