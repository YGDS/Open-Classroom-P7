import React from "react";
import "../../style/components/logement/tags.css";



function Tags({ nom }) {
  return (
    <div className="TagsContainer">
      <span className="Tags_name">{nom}</span>
    </div>
  );
}

export default Tags;