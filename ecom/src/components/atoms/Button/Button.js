import React from 'react';
export default function Button ({ type, text, className, handleClick,onClick,id,  ...props })  {
    return (
        <button className={`${className}`} id={id} type={type} {...props} onClick={onClick || handleClick}>
            {props.children}

        </button>
    );
}