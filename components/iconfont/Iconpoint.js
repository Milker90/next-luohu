/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconpoint = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M499.84600301 499.84600301m-60.76998493 0a0.94953101 0.94953101 0 1 0 121.53996987 0 0.94953101 0.94953101 0 1 0-121.53996987 0Z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

Iconpoint.defaultProps = {
  size: 18,
};

export default Iconpoint;
