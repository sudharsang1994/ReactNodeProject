import React from 'react';
//import './Input.styl';

export default React.forwardRef(({ className = "", label = "", type = "", placeholder = "", ...props }, ref) => {

    return (
        <input
            ref={ref}
            // id={`${id}`}
            className={`${className}`}
            label={`${label}`}
            type={`${type}`}
            // ref={props.reference}
            checked={(props.checked === 'true' || props.checked === true) ? true : ((props.checked === 'false' || props.checked === false) ? false : null)}
            placeholder={`${placeholder}`}
            onChange={props.onChange}
            onBlur={props.onblur}
            value={props.value}
            //readOnly={syntheticEvent ? false : true}
            {...props}
        />
    );
}
)