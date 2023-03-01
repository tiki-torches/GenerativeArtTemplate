import { Update } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import KeyGenerator from "../../../Utils/KeyGenerator";
import { TDModelUI } from "../../../Utils/WorkComponentsUI";
import EffectAdder from "./EffectAdder";
import EffectPropertyEditor from "./EffectPropertyEditor";
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
    <div>

      {/** TDModelのProperty編集用UI */}
      <TDModelPropertyEditor tdModel = { tdModel } updateParent = { updateParent }/>

      {/** Effect追加操作用UI */}
      <div>
        <EffectAdder targetEffects = { tdModel.effectsList } updateParent = { updateParent }/>
      </div>

      {/** EffectのProperty編集用UI */}
      <div>
        { tdModel.effectsList.map( (effect, index) => { 
          return <EffectPropertyEditor key = { tdModel.uid + effect.uid + index } effect = { effect } updateParent = { updateParent } />
        })}
      </div>

      <p> ___ ___ ___ </p>
    </div>
  );
  
};

export default TDModelEditor