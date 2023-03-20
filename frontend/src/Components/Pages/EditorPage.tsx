import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { WorkEditorPanel } from "../Organisms/WorkEditorPanel"
import { WorkPlayerPanel } from "../Organisms/WorkPlayerPanel"
import { TDModelUI, WorkModelUI } from "../../Utils/WorkComponentsUI";

const MESSAGE_CONFIRM: string = 'The playback status of the work will be lost. Is it OK?';

type Props = {
  sampleProp ?: any;
}

export const EditorPage : React.FC <Props> = ({ sampleProp }) => {

  // ___ state ___ ___ ___ ___ ___
  const [ workModelUI, setWorkModelUI ] = useState<WorkModelUI>(new WorkModelUI(0));
  const [ isEditing, setIsEditing ] = useState<boolean>(true);

  // ___ use effect ___ ___ ___ ___ ___
  // seEffect( () => { console.log(sampleState) }, [ sampleState ] );

  // ___ event handler ___ ___ ___ ___ ___
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
  };

  // ___ method ___ ___ ___ ___ ___

  const onClickShowWorkViewerButton = () => {
    if(isEditing === true){ setIsEditing(false) }
  }

  const onClickShowWorkEditorButton = () => {
    if(isEditing === false){
      const isConfirmed: boolean = window.confirm(MESSAGE_CONFIRM);
      if(isConfirmed === true){ setIsEditing(true) }
    }
  }

  // UIを更新するメソッド
  const updateWorkModelUI = () => {
    // WorkModelUIを複製した同オブジェクトで更新する
    // MEMO: オブジェクト内部の更新をReactは検知できないため、オブジェクトを複製しセットすることで再レンダーを促す
    const clone = { ...workModelUI };
    setWorkModelUI(clone);
  }

  const initializeWork = () => {
    const getRandom = (max: number): number => { return Math.floor(Math.random() * max); }
    const uid: number = getRandom(100);
    const workModel: WorkModelUI = new WorkModelUI(uid);
    setWorkModelUI(workModel);
  }

  /** UIオブジェクトをJSONに変換するメソッド */
  const converUIintoJSON = (workModelUI: WorkModelUI): string => {
    const json = JSON.stringify(workModelUI);
    return json
  }

  return (
    <div>

      <Grid container>

        <Grid item xs = { 12 }>
          {/** 編集中の場合は編集パネルを表示する 編集中でない場合（再生中の場合）は再生パネルを表示する */}
          { isEditing? 
            <WorkEditorPanel workModelUI = { workModelUI } updateParent = { updateWorkModelUI } InitializeWork = { initializeWork } />:
            <WorkPlayerPanel workJSON = { converUIintoJSON(workModelUI) } />
          }
        </Grid>

        <Grid item xs = { 12 }>
          { isEditing?
            <Button onClick = { onClickShowWorkViewerButton } variant="outlined" size = "small"> Play The Work </Button>:
            <Button onClick = { onClickShowWorkEditorButton } variant="outlined" size = "small"> Edit The Work </Button>
          }
        </Grid>

      </Grid>

    </div>
  );
};

export default EditorPage