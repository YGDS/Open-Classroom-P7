import React from 'react';
import "../../style/components/logement/host.css";

function Host(props) {
    return (
      <>
        <span className='HostName'>{props.name}</span>
        <img className='HostPicture' src={props.picture} alt="Propriétaire" />
      </>
    );
}

export default Host;