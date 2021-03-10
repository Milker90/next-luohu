/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconexpandless = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512 342.016l256 256-59.989333 59.989333-196.010667-196.010667-196.010667 196.010667-59.989333-59.989333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

Iconexpandless.defaultProps = {
  size: 18,
};

export default Iconexpandless;
