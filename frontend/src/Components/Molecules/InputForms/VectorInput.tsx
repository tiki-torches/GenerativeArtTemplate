import React, { useEffect, useState } from "react";
import NumberInput from "../../../Components/Atoms/NumberInput";
import { VectorUI } from "../../../Utils/Types";

/**
 * Outline	: XXXするComponent
 * Logic		: - AAAをBBBにする
 *            - 親ComponentからCCCを受け取り、DDDとしたものを子Componentに渡す
 * View			: - KKKをリスト表示する
 */

// Type Declaration of Props
type Props = {
  sampleProp ?: any;
  targetVal: VectorUI;
  updateParent: any;
}

export const VectorInput: React.FC<Props> = ({targetVal, updateParent }) => {

  // ___ state ___ ___ ___ ___ ___
  const [ sampleState, setSampleState ] = useState<string>('This is SampleState');

  // ___ use effect ___ ___ ___ ___ ___
  useEffect( () => { console.log(sampleState) }, [ sampleState ] );

  // ___ event handler ___ ___ ___ ___ ___
  const handleChangeX = (val: number) => {
    targetVal.x = val;
    updateParent();
  }

  const handleChangeY = (val: number) => {
    targetVal.y = val;
    updateParent();
  }

  const handleChangeZ = (val: number) => {
    targetVal.z = val;
    updateParent();
  }

  // ___ method ___ ___ ___ ___ ___
  const test = () => {
    console.log('test');
  }
  
  return (
    <div>
      <NumberInput targetVal = { targetVal.x } step = { 0.01 } onChange = { handleChangeX } />
      <NumberInput targetVal = { targetVal.y } step = { 0.01 } onChange = { handleChangeY } />
      <NumberInput targetVal = { targetVal.z } step = { 0.01 } onChange = { handleChangeZ } />
    </div>
  );
};

export default VectorInput