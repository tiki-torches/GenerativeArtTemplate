import React, { useEffect, useState } from "react";
import { EffectUI } from "../../Utils/WorkComponentsUI";

/**
 * Outline	: XXXするComponent
 * Logic		: - AAAをBBBにする
 *            - 親ComponentからCCCを受け取り、DDDとしたものを子Componentに渡す
 * View			: - KKKをリスト表示する
 */

// Type Declaration of Props
type Props = {
  effect      : EffectUI;
  updateWorkModelUI: any;
}

export const EffectEditor: React.FC<Props> = ({ effect, updateWorkModelUI }) => {

  // ___ state ___ ___ ___ ___ ___
  const [ sampleState, setSampleState ] = useState<string>('This is SampleState');

  // ___ use effect ___ ___ ___ ___ ___

  // ___ event handler ___ ___ ___ ___ ___
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setSampleState(newValue);
  };

  // ___ method ___ ___ ___ ___ ___


  return (
    <div>
      <h2>{ effect.type }</h2>
      <p> { JSON.stringify(effect.parameter) } </p>   
    </div>
  );
};

export default EffectEditor