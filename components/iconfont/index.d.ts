/* eslint-disable */

import { CSSProperties, DOMAttributes, FunctionComponent } from 'react';

interface Props extends DOMAttributes<SVGElement> {
  name: 'expandless' | 'expandmore' | 'personal-status' | 'forecast' | 'beijing-status' | 'cal-detail' | 'summary' | 'point' | 'arrow-right' | 'star' | 'money' | 'education' | 'home' | 'diqiu' | 'rili' | 'jiangbei' | 'city' | 'people' | 'jiuye' | 'back';
  size?: number;
  color?: string | string[];
  style?: CSSProperties;
  className?: string;
}

declare const IconFont: FunctionComponent<Props>;

export default IconFont;
