/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconjiangbei = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M649.35656739 498.98120117c15.07873536-4.20227051 34.27734375-9.97009278 58.58459472-17.79785156 196.76513671-63.11645508 172.21069337-307.58972167 172.21069336-307.58972168H727.38696289V142.859375H296.61303711v30.73425293H143.84814453s-24.80163574 245.37963867 172.21069336 307.58972168c24.14245605 7.66296387 43.258667 13.34838867 58.41979981 17.46826172 29.82788086 36.25488281 66.57714844 62.04528809 106.78710937 70.94421386v220.16601563c-104.31518555 6.42700195-184.5703125 44.82421875-184.57031249 91.29638672h430.77392577c0-46.47216797-80.25512694-84.86938477-184.57031249-91.29638672v-220.00122071c39.96276857-8.89892578 76.62963867-34.52453614 106.45751952-70.77941894z m77.94799803-223.62670898v-70.94421386H850.65356445c-0.41198731 61.05651856-16.39709473 204.09851075-151.94091798 247.60437011-7.74536133 2.47192383-14.58435059 4.61425781-21.17614745 6.67419434 30.98144531-53.31115723 49.76806641-118.81713867 49.76806641-183.33435059zM325.28735353 451.93225097C189.57873535 409.00317383 173.8408203 265.46679687 173.428833 204.41027833h123.18420411v70.94421386c0 64.51721191 18.70422364 130.02319335 49.85046387 183.16955567-6.50939942-2.05993653-13.43078614-4.20227051-21.17614745-6.59179689zM512 415.10058594l-95.08666992 66.16516114 33.5357666-110.82458497-92.28515626-70.0378418 115.76843263-2.3071289L512 188.67236327l38.06762695 109.34143068 115.76843263 2.3071289-92.28515626 70.03784179 33.5357666 110.82458497L512 415.10058594z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

Iconjiangbei.defaultProps = {
  size: 18,
};

export default Iconjiangbei;
