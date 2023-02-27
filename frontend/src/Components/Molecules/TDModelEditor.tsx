import { Update } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import KeyGenerator from "../../Utils/KeyGenerator";
import { TDModelUI } from "../../Utils/WorkComponentsUI";
import EffectAdder from "./EffectAdder";
import EffectEditor from "./EffectEditor";

/**
 * Outline	: XXXするComponent
 * Logic		: - AAAをBBBにする
 *            - 親ComponentからCCCを受け取り、DDDとしたものを子Componentに渡す
 * View			: - KKKをリスト表示する
 */

// Type Declaration of Props
type Props = {
  tdModel : TDModelUI;
  updateWorkModelUI: any;
}

export const TDModelEditor : React.FC<Props> = ({ tdModel, updateWorkModelUI }) => {

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
    <div>

      {/** TDModel情報表示用UI */}
      <p> { JSON.stringify(tdModel.uid) } </p>
      <p> { JSON.stringify(tdModel.type) } </p>
      <p> { JSON.stringify(tdModel.property) } </p>

      {/** Effect追加操作用UI */}
      <div>
        <EffectAdder targetEffects = { tdModel.effectsList } updateWorkModelUI = { updateWorkModelUI }/>
      </div>

      {/** EffectのProperty編集用UI */}
      <div>
        { tdModel.effectsList.map( (effect) => { 
          return <EffectEditor key = { KeyGenerator.generate() } effect = { effect } updateWorkModelUI = { updateWorkModelUI } />
        })}
      </div>

      <p> ___ ___ ___ </p>
    </div>
  );
  
};

export default TDModelEditor