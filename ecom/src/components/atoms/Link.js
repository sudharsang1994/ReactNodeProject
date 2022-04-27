import React from 'react';
export default function Link ({ href, asInfo, classNameAnchor, ...props }) {
  return (
      <a className={classNameAnchor} href={href} {...props}>
          {props.children}
      </a>
  );
};
