import React, { useEffect, useState } from "react";
import EffectUIFactory from "../../Utils/Factories/EffectUIFactory";
import { EffectUIType } from "../../Utils/Types";
import { EffectUI } from "../../Utils/WorkComponentsUI";

/**
 * Outline	: 指定されたEffectUIを生成するComponent
 * Logic		: - 生成するEffectUIの識別子（EffectType）をユーザーから取得する
 *            - 生成したEffectUIをPropにセットする
 * View			: - XXX
 */


const DICT: any = [
  "ROLL", "MOVE"
]

// Type Declaration of Props
type Props = {
  targetEffects: Array<EffectUI>;   // 生成したEffectUIをセットするリスト
  updateParent: any;
}

export const EffectAdder: React.FC<Props> = ({ targetEffects, updateParent }) => {

  // ___ state ___ ___ ___ ___ ___
  const [ sampleState, setSampleState ] = useState<string>('This is SampleState');
  const [ targetType, setTargetType ] = useState<EffectUIType>(DICT[0]);

  // ___ use effect ___ ___ ___ ___ ___
  // useEffect( () => { console.log(sampleState) }, [ sampleState ] );

  // ___ event handler ___ ___ ___ ___ ___
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newVal = event.target.value as EffectUIType;
    setTargetType(newVal);
  };

  // ___ method ___ ___ ___ ___ ___
  const test = () => {
    console.log('test');
  }
  
  const onClickAddButton = () => {
    // EffectUIを生成
    const newEffect: EffectUI = EffectUIFactory.generate(1, targetType);
    // EffectUIをセットし更新
    targetEffects.push(newEffect);
    updateParent();
  }


  return (

    <div>

      {/** MEMO: htmlタグのformは用いないこと formはサーバーへの通信を実行するイベントを発火させるが本処理では不要 */}
      <select value = { sampleState } onChange = { handleChange } >
        
        {/** EffctTypeの選択肢 */}
        { DICT.map( (effectType: EffectUIType) => { 
          return <option key = { effectType } value = { effectType } > { effectType } </option>
        })}

      </select>
        
      <button onClick = { onClickAddButton }> ADD EFFECT </button>

    </div>
  );
};

export default EffectAdder