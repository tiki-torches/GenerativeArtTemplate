import React, { useEffect, useState } from "react";
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
  update: any;
}

export const VectorInput: React.FC<Props> = ({targetVal, update }) => {

  // ___ state ___ ___ ___ ___ ___
  const [ sampleState, setSampleState ] = useState<string>('This is SampleState');
  const [ valX, setValX ] = useState<any>(targetVal.x);
  const [ valY, setValY ] = useState<any>(targetVal.y);
  const [ valZ, setValZ ] = useState<any>(targetVal.z);

  // ___ use effect ___ ___ ___ ___ ___
  useEffect( () => { console.log(sampleState) }, [ sampleState ] );

  // ___ event handler ___ ___ ___ ___ ___
  const handleChangeValX = (e : React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    targetVal.x = Number(newValue);
    update();
  };
  const handleChangeValY = (e : React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    targetVal.y = Number(newValue);
    update();
  };
  const handleChangeValZ = (e : React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    targetVal.z = Number(newValue);
    update();
  };

  // ___ method ___ ___ ___ ___ ___
  const test = () => {
    console.log('test');
  }
  
  return (
    <div>
      <input
        type      = "number"
        value     = { valX }
        step      = { 0.01 }
        onChange  = { handleChangeValX }
      />
      <input
        type      = "number"
        value     = { valY }
        step      = { 0.01 }
        onChange  = { handleChangeValY }
      />
      <input
        type      = "number"
        value     = { valZ }
        step      = { 0.01 }
        onChange  = { handleChangeValZ }
      />

    </div>
  );
};

export default VectorInput