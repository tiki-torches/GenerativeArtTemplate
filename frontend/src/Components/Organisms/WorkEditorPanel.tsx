import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import { TDModelUI, WorkModelUI } from "../../Utils/WorkComponentsUI";
import { TDModelEditor } from "../Molecules/TDModelEditorChildren/TDModelEditor";
import KeyGenerator from "../../Utils/KeyGenerator";
import BasicAccordion from "../Atoms/BasicAccordion";

/**
 * Outline	: XXXするComponent
 * Logic		: - AAAをBBBにする
 *            - 親ComponentからCCCを受け取り、DDDとしたものを子Componentに渡す
 * View			: - KKKをリスト表示する
 */

// Type Declaration of Props
type Props = {
  workModelUI     : WorkModelUI;
  updateParent    : any;
  InitializeWork  : any;
}

export const WorkEditorPanel: React.FC<Props> = ({ workModelUI, updateParent, InitializeWork }) => {

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
    updateParent();
  }

  const onClickInitializeButton = () => {
    InitializeWork();
  }

  return (

    <Grid container spacing = { 2 }>

      <Grid item xs = { 12 }>
        <Chip onClick = { onClickInitializeButton } label = 'INITIALIZE WORK' variant = "outlined" color = "warning"/>
      </Grid>

      <Grid item xs = { 12 }>
        <Chip onClick = { onClickCreateButton } label = 'ADD SAMPLE TDMODEL' variant = "outlined"/>
      </Grid>

      {/** TDModelの一覧を表示 */}
      <Grid item xs = { 12 } >
        <Grid container spacing = { 2 }>
          { workModelUI?.tdModelsList.map( (tdModel, index) => {
              const key       = tdModel.uid + index;    // ランダム生成したキーを設定しないこと Reactによる過剰な範囲の再レンダーを防ぐため
              const label     = tdModel.type + tdModel.uid;
              const contents  = <TDModelEditor tdModel = { tdModel } updateParent = { updateParent }/>;
              const basicAccordion = <BasicAccordion label = { label } contents = { contents } />;
            return <Grid item xs = { 12 } sm = { 6 } key = { key }> { basicAccordion } </Grid>
          })}
        </Grid>
      </Grid>

    </Grid>

  );
};

export default WorkEditorPanel