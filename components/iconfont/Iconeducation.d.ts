/* eslint-disable */

import { CSSProperties, DOMAttributes, FunctionComponent } from 'react';

interface Props extends DOMAttributes<SVGElement> {
  size?: number;
  color?: string | string[];
  style?: CSSProperties;
  className?: string;
}

declare const Iconeducation: FunctionComponent<Props>;

export default Iconeducation;
