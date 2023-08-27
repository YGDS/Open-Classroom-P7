import React, { useState } from "react";
import Arrow from "../../assets/icone/lil_arrow.png";
import "../../style/components/collapse/collapse.css"



const Collapse = ({ title, content }) => {

  const isArray = Array.isArray(content);

  const Equip = (Elist = []) =>
    Elist.map(Elist => `${Elist}`).join('\n');


  const [isOpen, setIsOpen] = useState(false);

  const display = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="CollapseContainer">
      <div className="Collapse_top">
      <h2 className="Collapse_name">{title}</h2>
        
        <p onClick={display}>
          {isOpen ? (
            <img className="ArrowUp" src={Arrow} alt="icone flèche" />
          ) : (
            <img className="ArrowDown" src={Arrow} alt="icone flèche" />
          )}
        </p>
      </div>
      <div className="Collapse_bottom">
          {isOpen && !isArray && <p className="Collapse_content">{content}</p>}
          {isOpen && isArray && <p className="Collapse_content">{Equip(content)}</p>}
      </div>
    </div>

  );
};

export default Collapse;