import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import NumberInput from "../../Atoms/NumberInput";
import { ColorUI } from "../../../Utils/Types";

/**
 * Outline	: XXXするComponent
 * Logic		: - AAAをBBBにする
 *            - 親ComponentからCCCを受け取り、DDDとしたものを子Componentに渡す
 * View			: - KKKをリスト表示する
 */

// Type Declaration of Props
type Props = {
  sampleProp ?: any;
  targetVal: ColorUI;
  updateParent: any;
}

export const ColorInput: React.FC<Props> = ({targetVal, updateParent }) => {

  // ___ state ___ ___ ___ ___ ___
  const [ sampleState, setSampleState ] = useState<string>('This is SampleState');

  // ___ use effect ___ ___ ___ ___ ___

  // ___ event handler ___ ___ ___ ___ ___
  const handleChangeR = (val: number) => {
    targetVal.r = val;
    updateParent();
  }

  const handleChangeG = (val: number) => {
    targetVal.g = val;
    updateParent();
  }

  const handleChangeB = (val: number) => {
    targetVal.b = val;
    updateParent();
  }

  // ___ method ___ ___ ___ ___ ___
  
  return (
    <Grid container spacing = { 2 }>

      <Grid item xs = { 12 } md = { 4 } >
        <NumberInput targetVal = { targetVal.r } onChange = { handleChangeR } label = "R" />
      </Grid>

      <Grid item xs = { 12 } md = { 4 } >
        <NumberInput targetVal = { targetVal.g } onChange = { handleChangeG } label = "G"/>
      </Grid>

      <Grid item xs = { 12 } md = { 4 } >
        <NumberInput targetVal = { targetVal.b } onChange = { handleChangeB } label = "B"/>
      </Grid>
      
    </Grid>
  );
};

export default ColorInput