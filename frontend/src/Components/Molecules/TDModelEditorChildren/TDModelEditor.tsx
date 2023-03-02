import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import { EffectUI, TDModelUI } from "../../../Utils/WorkComponentsUI";
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

  const removeEffect = (target: EffectUI) => {
    /** MEMO: EffectEditorではなく本コンポーネントにEffectを削除するメソッドを追加する理由
     *    JSには配列から直接特定の要素を削除する処理が無く、特定の要素を削除後の配列を返すものしか存在しない
     *    つまり、配列から特定の要素を差し替えるためには、配列の差し替えを行うしか方法がない
     *    TDModelのプロパティである配列effectsListを操作するためには、TDModelにアクセスできる本コンポーネント内で先述の差し替えを実行する必要がある
     *    なお、子コンポーネントにTDModelへアクセスする手段を提供するという方法もあるが、移譲するデータ量を抑えるために不採用とした
    */
    const filteredEffects = tdModel.effectsList.filter(
      (effect: EffectUI) => { return (effect != target) }
    )
    tdModel.effectsList = filteredEffects;
    updateParent();
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
            const editor  = <EffectEditor effect = { effect } updateParent = { updateParent } removeEffect = { removeEffect } />;
            const key     = tdModel.uid + effect.uid + index;
            return <Grid item xs = { 12 } key = { key }> { editor } </Grid>
          })}

        </Grid>
      </Grid>
    </Grid>

  );
  
};

export default TDModelEditor