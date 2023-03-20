import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import { TDModelUI } from "../../../Utils/WorkComponentsUI";
import PositionInput from "../InputForms/PositionInput";
import ColorInput from "../InputForms/ColorInput";

/**
 * Outline	: 指定されたEffectUIを生成するComponent
 * Logic		: - 生成するEffectUIの識別子（EffectType）をユーザーから取得する
 *            - 生成したEffectUIをPropにセットする
 * View			: - XXX
 */




// Type Declaration of Props
type Props = {
  tdModel       : TDModelUI;
  updateParent  : any;
}

export const TDModelPropertyEditor: React.FC<Props> = ({ tdModel, updateParent }) => {

  // ___ state ___ ___ ___ ___ ___
  const [ sampleState, setSampleState ] = useState<string>('This is SampleState');

  // ___ use effect ___ ___ ___ ___ ___
  // useEffect( () => { console.log(sampleState) }, [ sampleState ] );

  // ___ event handler ___ ___ ___ ___ ___

  // ___ method ___ ___ ___ ___ ___
  const test = () => {
    console.log('test');
  }
  
  return (

    <div>

      <p> POSITION </p>
      <PositionInput targetVal = { tdModel.property.position } updateParent= { updateParent }/>

      <p> COLOR </p>
      <ColorInput targetVal = { tdModel.property.color } updateParent= { updateParent }/>

    </div>
  );
};

export default TDModelPropertyEditor