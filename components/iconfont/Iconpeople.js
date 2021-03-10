/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconpeople = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512 512a185.39428711 185.39428711 0 1 1 0-370.78857422 185.39428711 185.39428711 0 0 1 0 370.78857422z m-370.78857422 370.78857422c22.98889161-182.89146425 180.24959565-324.44000244 370.78857422-324.44000244 190.53897858 0 347.79968262 141.54853821 370.78857422 324.44000244H141.21142578z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

Iconpeople.defaultProps = {
  size: 18,
};

export default Iconpeople;
