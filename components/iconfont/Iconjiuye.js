/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconjiuye = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M797.824 258.1632H644.2496v-32a70.3872 70.3872 0 0 0-70.3872-70.3872H433.0752a70.3872 70.3872 0 0 0-70.3872 70.3872v32h-127.9872a76.8 76.8 0 0 0-76.7872 76.7872v115.1872H874.624v-115.1872a76.8 76.8 0 0 0-76.8-76.7872z m-204.7744 0H413.8752V226.176a19.2 19.2 0 0 1 19.1872-19.1872h140.7872a19.2 19.2 0 0 1 19.1872 19.1872v31.9872zM605.8496 507.7376a96 96 0 0 1-191.9744 0l-0.064-6.4H157.9008v281.5616a76.8 76.8 0 0 0 76.7872 76.7872H797.824a76.8 76.8 0 0 0 76.7872-76.7872V501.3376H605.8496v6.4z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M554.6496 507.7376v-6.4h-89.5744v6.4a44.8384 44.8384 0 0 0 44.7872 44.7872 44.8384 44.8384 0 0 0 44.7872-44.7872z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

Iconjiuye.defaultProps = {
  size: 18,
};

export default Iconjiuye;
