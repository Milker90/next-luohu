/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconbeijingStatus = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1820 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M125.87331219 511.53718839c0 436.21838078 353.62595075 789.86361431 789.86361432 789.86361637 436.21838078 0 789.86361431-353.62595075 789.86361639-789.86361637 0-436.23766355-353.62595075-789.86361431-789.86361639-789.86361436-436.23766355 0-789.86361431 353.62595075-789.86361432 789.86361436z m0 0"
        fill={getIconColor(color, 0, '#4974EE')}
      />
      <path
        d="M738.88538248 495.82090878v-35.0771956h-161.84876261v32.37746729h32.37746725v291.33934282h97.11311292V495.82090878h32.35818244z m-213.10504742-64.7549325h779.60464388c18.87881953-8.09918701 18.87881953-26.97800859 0-37.75764114-16.17909122-13.47936291-388.45245776-283.24015583-388.45245776-283.2401558S544.65915462 379.80968946 525.78033506 393.30833514c-18.89810439 10.77963254-18.89810439 26.97800859 0 37.75764114z m391.15218612-186.12704085c32.37746522 0 56.6557455 24.27827822 56.65574345 56.65574548s-24.27827822 56.6557455-56.65574345 56.65574346-56.6557455-24.27827822-56.6557455-56.65574346 24.27827822-56.6557455 56.6557455-56.65574548zM547.35888293 816.81870573h741.84700477v32.37746522h-741.84700477v-32.37746522z m-32.37746523 67.45466083h806.58265245v29.67773693H514.9814177v-29.67773693z m482.86584234-388.45245778v-32.37746526h-161.84876262v29.67773695H868.37596472v291.33934282h97.1131129V495.82090878h32.35818242z m256.28143207 0v-32.37746526h-159.16831709v29.67773695h29.6777369v291.33934282h99.81284326V495.82090878h29.67773693z m0 0"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
    </svg>
  );
};

IconbeijingStatus.defaultProps = {
  size: 18,
};

export default IconbeijingStatus;