import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import NumberInput from "../../../Components/Atoms/NumberInput";
import { VectorUI } from "../../../Utils/Types";

const inputProps = { step: "10" };

// Type Declaration of Props
type Props = {
  sampleProp ?: any;
  targetVal: VectorUI;
  updateParent: any;
}

/**
 * Outline	: XXXするComponent
 * Logic		: - AAAをBBBにする
 *            - 親ComponentからCCCを受け取り、DDDとしたものを子Componentに渡す
 * View			: - KKKをリスト表示する
 */
export const VectorInput: React.FC<Props> = ({targetVal, updateParent }) => {

  // ___ state ___ ___ ___ ___ ___
  const [ sampleState, setSampleState ] = useState<string>('This is SampleState');

  // ___ use effect ___ ___ ___ ___ ___

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
  
  return (
    <Grid container spacing = { 2 }>

      <Grid item xs = { 12 } md = { 4 } >
        <NumberInput targetVal = { targetVal.x } onChange = { handleChangeX } label = "X" inputProps = { inputProps } />
      </Grid>

      <Grid item xs = { 12 } md = { 4 } >
        <NumberInput targetVal = { targetVal.y } onChange = { handleChangeY } label = "Y" inputProps = { inputProps }/>
      </Grid>

      <Grid item xs = { 12 } md = { 4 } >
        <NumberInput targetVal = { targetVal.z } onChange = { handleChangeZ } label = "Z" inputProps = { inputProps }/>
      </Grid>
      
    </Grid>
  );
};

export default VectorInput