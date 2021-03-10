/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconexpandmore = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M708.010667 365.994667l59.989333 59.989333-256 256-256-256 59.989333-59.989333 196.010667 196.010667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

Iconexpandmore.defaultProps = {
  size: 18,
};

export default Iconexpandmore;
