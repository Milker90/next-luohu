import React, { useState } from "react";
import Header from "./Header";
import { WhiteSpace, Toast } from "antd-mobile";
import SelectPicker from "./SelectPicker";
import ArrowSelectItem from "./ArrowSelectItem";
import ArrowSelectItemType from "./ArrowSelectItemType";
import "../../../styles/report/steps/StepCommon.module.less";

const NaShui = ({
  naShuiTypes,
  naShuiType,
  onChangeNaShuiType,
  naShuiLevel,
  onChangeNaShuiLevel,
  nashuiIllegal,
  onChangeNashuiIllegal,
  naShuiValues1,
  naShuiValues2,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const showModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const finishModal = () => {
    if (naShuiType === undefined) {
      Toast.fail("请选择纳税类型", 1.5);
      return;
    }
    closeModal();
  };

  const showAdditionInfo = () => {
    if (naShuiType === undefined) return null;
    if (naShuiType.value === 1) {
      return (
        <SelectPicker
          data={naShuiValues1}
          value={naShuiLevel}
          onChange={onChangeNaShuiLevel}
          extra="请选择纳税年限"
        />
      );
    }
    return null;
  };

  return (
    <>
      <div className="stepContainer">
        <Header iconName="money" title="纳税" />
        <WhiteSpace size="xl" />
        <div className="inputItemTitle">近三年连续纳税</div>
        <ArrowSelectItem
          title="请选择"
          value={naShuiType ? naShuiType.label : undefined}
          onClick={showModal}
        />
        {showAdditionInfo()}
        <WhiteSpace size="xl" />
        <div className="inputItemTitle">
          自积分落户申报工作启动前连续5个自然年度内，涉税违法行为记录次数
        </div>
        <SelectPicker
          data={naShuiValues2}
          value={nashuiIllegal}
          onChange={onChangeNashuiIllegal}
          extra="请选择涉税违法记录次数"
        />
      </div>
      <ArrowSelectItemType
        title="纳税类型"
        isOpen={isOpen}
        closeHandle={closeModal}
        finishHandle={finishModal}
        data={naShuiTypes}
        typeValue={naShuiType}
        onChangeTypeValue={onChangeNaShuiType}
      />
    </>
  );
};

export default React.memo(NaShui);
