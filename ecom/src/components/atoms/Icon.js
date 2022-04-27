import React from 'react';
export default function Icon ({ classNameIcon, ...props }) {
    return (
        <i className={`${classNameIcon}`} {...props } onClick={props.onClick}/>  
    );
  };
  
