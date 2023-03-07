import React, { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';

/**
 * Outline	: XXXするComponent
 * Logic		: - AAAをBBBにする
 *            - 親ComponentからCCCを受け取り、DDDとしたものを子Componentに渡す
 * View			: - KKKをリスト表示する
 */

// Type Declaration of Props
type Props = {
  targetVal  : number;
  inputProps?: any;
  onChange  ?: any;
  label     ?: string;
}

export const NumberInput: React.FC<Props> = ({ targetVal, inputProps, onChange, label }) => {

  // ___ state ___ ___ ___ ___ ___
  const [ val, setVal ] = useState<any>(targetVal);

  // ___ use effect ___ ___ ___ ___ ___

  // ___ event handler ___ ___ ___ ___ ___
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    let newVal = Number(e.target.value);
    // UIを更新
    setVal(newVal);
    // 親コンポーネントが定義したイベントを実行
    onChange(newVal);
  };

  // ___ method ___ ___ ___ ___ ___

  return (
    <TextField

      type            = "number"
      fullWidth       = { true }
      InputLabelProps = { { shrink: true }}

      value       = { val }
      onChange    = { handleChange }
      label       = { label? label: "Number" }
      inputProps  = { inputProps? inputProps: undefined }

    />
  );
};

export default NumberInput