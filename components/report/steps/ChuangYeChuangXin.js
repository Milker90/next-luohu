import React, { useState } from "react";
import Header from "./Header";
import { WhiteSpace, Toast } from "antd-mobile";
import ArrowSelectItem from "./ArrowSelectItem";
import ArrowSelectItemType from "./ArrowSelectItemType";
import SelectPicker from "./SelectPicker";
import "../../../styles/report/steps/StepCommon.module.less";

const ChuangYeChuangXin = ({
  chuangYeChuangXinTypes,
  chuangYeChuangXinType,
  onChangeChuangYeChuangXinType,
  chuangYeChuangXinLevel,
  chuangYeChuangXinValues1,
  chuangYeChuangXinValues2,
  chuangYeChuangXinValues3,
  onChangeChuangYeChuangXinLevel,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const showModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const finishModal = () => {
    if (chuangYeChuangXinType === undefined) {
      Toast.fail("请选择创新创业类型", 1.5);
      return;
    }
    closeModal();
  };

  const showAdditionInfo = () => {
    if (chuangYeChuangXinType === undefined) return null;
    if (chuangYeChuangXinType.value === 1) {
      // 在科技、文化领域获得国家级或本市市级奖项
      return (
        <SelectPicker
          data={chuangYeChuangXinValues1}
          value={chuangYeChuangXinLevel}
          onChange={onChangeChuangYeChuangXinLevel}
          extra="请选择获奖积分"
        />
      );
    }

    if (chuangYeChuangXinType.value === 2) {
      // 在创新创业大赛获得国家级或本市市级奖项
      return (
        <SelectPicker
          data={chuangYeChuangXinValues2}
          value={chuangYeChuangXinLevel}
          onChange={onChangeChuangYeChuangXinLevel}
          extra="请选择获奖积分"
        />
      );
    }

    if (chuangYeChuangXinType.value === 3) {
      // 在国家高新技术企业或科技型中小企业持股且申请人在该企业连续工作满一个自然年度，且当年持股比例不低于10
      return (
        <>
          <WhiteSpace size="lg" />
          <div className="inputItemTitle">
            申请人所在企业近3年累计获得股权类现金融资
          </div>
          <SelectPicker
            data={chuangYeChuangXinValues3}
            value={chuangYeChuangXinLevel}
            onChange={onChangeChuangYeChuangXinLevel}
            extra="请选择融资额度"
          />
        </>
      );
    }

    return null;
  };

  return (
    <>
      <div className="stepContainer">
        <Header iconName="diqiu" title="创新创业" />
        <WhiteSpace size="xl" />

        <div className="inputItemTitle">创新创业类型</div>
        <ArrowSelectItem
          title="请选择"
          value={
            chuangYeChuangXinType ? chuangYeChuangXinType.label : undefined
          }
          onClick={showModal}
        />
        {showAdditionInfo()}
      </div>
      <ArrowSelectItemType
        title="创新创业类型"
        isOpen={isOpen}
        closeHandle={closeModal}
        finishHandle={finishModal}
        data={chuangYeChuangXinTypes}
        typeValue={chuangYeChuangXinType}
        onChangeTypeValue={onChangeChuangYeChuangXinType}
      />
    </>
  );
};

export default React.memo(ChuangYeChuangXin);
