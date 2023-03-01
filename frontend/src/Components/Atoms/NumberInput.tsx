import React, { useEffect, useState } from "react";

/**
 * Outline	: XXXするComponent
 * Logic		: - AAAをBBBにする
 *            - 親ComponentからCCCを受け取り、DDDとしたものを子Componentに渡す
 * View			: - KKKをリスト表示する
 */

// Type Declaration of Props
type Props = {
  targetVal  : number;
  step       : number;
  onChange  ?: any;
}

export const NumberInput: React.FC<Props> = ({ targetVal, step, onChange }) => {

  // ___ state ___ ___ ___ ___ ___
  const [ val, setVal ] = useState<any>(targetVal);

  // ___ use effect ___ ___ ___ ___ ___

  // ___ event handler ___ ___ ___ ___ ___
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {

    const newVal = Number(e.target.value);

    // UIを更新
    setVal(newVal);

    // 親コンポーネントが定義したイベントを実行
    onChange(newVal);
    
  };


  // ___ method ___ ___ ___ ___ ___
  const test = () => {
    console.log('test');
  }
  
  return (
    <div>
      <input
        type      = "number"
        value     = { val }
        step      = { step }
        onChange  = { handleChange }
      />
    </div>
  );
};

export default NumberInput