/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconstar = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512 709.62499971l231.75 139.87500029-61.49999971-263.62500029 204.75-177.37499971-269.6249997-22.87500029-105.3749997-248.625-105.37499972 248.625-269.62499971 22.87500029 204.75 177.37499971-61.4999997 263.62500029z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

Iconstar.defaultProps = {
  size: 18,
};

export default Iconstar;
