import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import { TDModelUI } from "../../../Utils/WorkComponentsUI";
import EffectAdder from "./EffectAdder";
import EffectEditor from "./EffectEditor";
import TDModelPropertyEditor from "./TDModelPropertyEditor";

/**
 * Outline	: XXXするComponent
 * Logic		: - AAAをBBBにする
 *            - 親ComponentからCCCを受け取り、DDDとしたものを子Componentに渡す
 * View			: - KKKをリスト表示する
 */

// Type Declaration of Props
type Props = {
  tdModel : TDModelUI;
  updateParent: any;
}

export const TDModelEditor : React.FC<Props> = ({ tdModel, updateParent }) => {

  // ___ state ___ ___ ___ ___ ___
  // const [ workPlayer, setWorkPlayer ] = useState<WorkPlayerForTHREE>();

  // ___ use effect ___ ___ ___ ___ ___
  
  // ___ event handler ___ ___ ___ ___ ___
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
  };

  // ___ method ___ ___ ___ ___ ___
  const test = () => {
    console.log('test');
  }

  return (
    <Grid container spacing = { 2 }>

      {/** TDModelのProperty編集用UI */}
      <Grid item xs = { 12 }>
        <TDModelPropertyEditor tdModel = { tdModel } updateParent = { updateParent }/>
      </Grid>

      {/** Effect追加操作用UI */}
      <Grid item xs = { 12 }>
        <EffectAdder targetEffects = { tdModel.effectsList } updateParent = { updateParent }/>
      </Grid>

      {/** EffectのProperty編集用UI */}
      <Grid item container xs = { 12 } >
        <Grid  container spacing = { 2 } >
          { tdModel.effectsList.map( (effect, index) => {
            const key = tdModel.uid + effect.uid + index;
            const editor = <EffectEditor effect = { effect } updateParent = { updateParent } />;
            return <Grid item xs = { 12 } key = { key }> { editor } </Grid>
          })}
        </Grid>
      </Grid>
    </Grid>

  );
  
};

export default TDModelEditor