import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import { TDModelUI, WorkModelUI } from "../../Utils/WorkComponentsUI";
import { TDModelEditor } from "../Molecules/TDModelEditor";
import KeyGenerator from "../../Utils/KeyGenerator";

/**
 * Outline	: XXXするComponent
 * Logic		: - AAAをBBBにする
 *            - 親ComponentからCCCを受け取り、DDDとしたものを子Componentに渡す
 * View			: - KKKをリスト表示する
 */

// Type Declaration of Props
type Props = {
  workModelUI       : WorkModelUI;
  updateWorkModelUI : any;
  InitializeWork    : any;
}

export const WorkEditorPanel: React.FC<Props> = ({ workModelUI, updateWorkModelUI, InitializeWork }) => {

  // ___ state ___ ___ ___ ___ ___
  const [ sampleState, setSampleState ] = useState<string>('This is SampleState');

  // ___ use effect ___ ___ ___ ___ ___
  // useEffect( () => { console.log(sampleState) }, [ sampleState ] );

  // ___ event handler ___ ___ ___ ___ ___

  // ___ method ___ ___ ___ ___ ___
  const test = () => {
    console.log('test');
  }

  const onClickCreateButton = () => {

    // TDModelを作成
    const uid: number         = workModelUI.tdModelsList.length + 1;   // !!! WIP !!!
    const tdModel: TDModelUI  = new TDModelUI(uid, "CUBE");       // !!! WIP !!!

    // WorkModelにTDModelを追加し更新
    workModelUI.tdModelsList.push(tdModel);
    updateWorkModelUI();
  }

  const onClickInitializeButton = () => {
    InitializeWork();
  }

  return (
    <Grid container>

      <Grid item xs = { 12 }>
        <button onClick = { onClickInitializeButton }> INITIALIZE WORK </button>
      </Grid>

      <Grid item xs = { 12 }>
        <button onClick = { onClickCreateButton }> ADD SAMPLE TDMODEL </button>
      </Grid>

      <Grid item xs = { 12 }>
        {/** TDModelの一覧を表示 */}
        { workModelUI?.tdModelsList.map( (tdModel) => {
          return <TDModelEditor key = { KeyGenerator.generate() } tdModel = { tdModel } updateWorkModelUI = { updateWorkModelUI }/>
        })}
      </Grid>

    </Grid>
  );
};

export default WorkEditorPanel