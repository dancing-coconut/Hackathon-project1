import React from "react";

function BlogTitle(props) {
  return (
    <div className="blogsTitle__div">
      <span className="blogsTitle__titleName">{props.titleName}</span>
      <span className="blogsTitle__date">{props.date}</span>
    </div>
  );
}

export default BlogTitle;
