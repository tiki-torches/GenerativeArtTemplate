import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import { TDModelUI, WorkModelUI } from "../../Utils/WorkComponentsUI";
import { TDModelEditor } from "../Molecules/TDModelEditor";

/**
 * Outline	: XXXするComponent
 * Logic		: - AAAをBBBにする
 *            - 親ComponentからCCCを受け取り、DDDとしたものを子Componentに渡す
 * View			: - KKKをリスト表示する
 */

// Type Declaration of Props
type Props = {
  workModel        : WorkModelUI;
  updateWorkModel  : any;
}

export const WorkEditorPanel: React.FC<Props> = ({ workModel, updateWorkModel }) => {

  // ___ state ___ ___ ___ ___ ___
  const [ sampleState, setSampleState ] = useState<string>('This is SampleState');

  // ___ use effect ___ ___ ___ ___ ___
  // useEffect( () => { console.log(sampleState) }, [ sampleState ] );

  // ___ event handler ___ ___ ___ ___ ___
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setSampleState(newValue);
  };

  // ___ method ___ ___ ___ ___ ___
  const test = () => {
    console.log('test');
  }

  const onClickCreateButton = () => {
    // MEMO: オブジェクト内部の更新をReactは検知できないため、オブジェクトを複製しセットすることで再レンダーを促す
    const clonedWorkModel: WorkModelUI = { ...workModel };

    // TDModelを作成
    const uid: number         = clonedWorkModel.tdModelsList.length + 1;
    const tdModel: TDModelUI  = new TDModelUI(uid, "CUBE");

    // WorkModelにTDModelを追加し更新
    clonedWorkModel.tdModelsList.push(tdModel);
    updateWorkModel(clonedWorkModel);
  }

  return (
    <div>

      <Grid item xs = { 12 }>
        <button onClick = { onClickCreateButton }> ADD SAMPLE TDMODEL</button>
      </Grid>

      <Grid item xs = { 12 }>
        { workModel?.tdModelsList.map( (tdModel) => <TDModelEditor key = { 'TDModel' + tdModel.uid } tdModel = { tdModel }/> )}
      </Grid>

    </div>
  );
};

export default WorkEditorPanel