/* eslint-disable */

import React from 'react';
import Iconexpandless from './Iconexpandless';
import Iconexpandmore from './Iconexpandmore';
import IconpersonalStatus from './IconpersonalStatus';
import Iconforecast from './Iconforecast';
import IconbeijingStatus from './IconbeijingStatus';
import IconcalDetail from './IconcalDetail';
import Iconsummary from './Iconsummary';
import Iconpoint from './Iconpoint';
import IconarrowRight from './IconarrowRight';
import Iconstar from './Iconstar';
import Iconmoney from './Iconmoney';
import Iconeducation from './Iconeducation';
import Iconhome from './Iconhome';
import Icondiqiu from './Icondiqiu';
import Iconrili from './Iconrili';
import Iconjiangbei from './Iconjiangbei';
import Iconcity from './Iconcity';
import Iconpeople from './Iconpeople';
import Iconjiuye from './Iconjiuye';
import Iconback from './Iconback';

const IconFont = ({ name, ...rest }) => {
  switch (name) {
    case 'expandless':
      return <Iconexpandless {...rest} />;
    case 'expandmore':
      return <Iconexpandmore {...rest} />;
    case 'personal-status':
      return <IconpersonalStatus {...rest} />;
    case 'forecast':
      return <Iconforecast {...rest} />;
    case 'beijing-status':
      return <IconbeijingStatus {...rest} />;
    case 'cal-detail':
      return <IconcalDetail {...rest} />;
    case 'summary':
      return <Iconsummary {...rest} />;
    case 'point':
      return <Iconpoint {...rest} />;
    case 'arrow-right':
      return <IconarrowRight {...rest} />;
    case 'star':
      return <Iconstar {...rest} />;
    case 'money':
      return <Iconmoney {...rest} />;
    case 'education':
      return <Iconeducation {...rest} />;
    case 'home':
      return <Iconhome {...rest} />;
    case 'diqiu':
      return <Icondiqiu {...rest} />;
    case 'rili':
      return <Iconrili {...rest} />;
    case 'jiangbei':
      return <Iconjiangbei {...rest} />;
    case 'city':
      return <Iconcity {...rest} />;
    case 'people':
      return <Iconpeople {...rest} />;
    case 'jiuye':
      return <Iconjiuye {...rest} />;
    case 'back':
      return <Iconback {...rest} />;

  }

  return null;
};

export default IconFont;
