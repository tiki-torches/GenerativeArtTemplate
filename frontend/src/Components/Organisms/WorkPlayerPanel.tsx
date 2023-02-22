import React, { useEffect, useState } from "react";
import TDModelForTHREE from "../../Engine/WorkComponents/TDModels/TDModelForTHREE";
import { PlaybackScreen } from "../Molecules/PlaybackScreen"
import JSONDecoder from "../../Engine/Utils/Decoder/JSONDecoder"
import TDModelForRAW from "../../Engine/WorkComponents/TDModels/TDModelForRAW";
import THREEConverter from "../../Engine/WorkComponents/Converters/THREEConverter";

/**
 * Outline	: XXXするComponent
 * Logic		: - AAAをBBBにする
 *            - 親ComponentからCCCを受け取り、DDDとしたものを子Componentに渡す
 * View			: - KKKをリスト表示する
 */

// Type Declaration of Props
type Props = {
  workJSON: string;
}

export const WorkPlayerPanel : React.FC<Props> = ({ workJSON }) => {

  // 
  /** MEMO:
   *  本コンポーネントでは、作品情報オブジェクト自体ではなく作品情報をJSON化したものを利用する
   *  これにより、作品情報の出所を自由化できる（本アプリ外でも作品編集が可能になる）
   *  また、意図せず作品情報を変更してしまうといったコーディング時のミスも防ぐことができる
   */

  // ___ state ___ ___ ___ ___ ___
  const [ tdModels, setTDModels ] = useState<Array<TDModelForTHREE>>([]);   // レンダリング用のモデル（UI用のオブジェクトではない）

  // ___ use effect ___ ___ ___ ___ ___

  // ___ event handler ___ ___ ___ ___ ___

  // ___ method ___ ___ ___ ___ ___
  const test = () => {
    JSONDecoder.decode(workJSON);
  }

  // JSONからRAW形式のTDModel（のリスト）を復元するメソッド
  const decodeJSON = (json: string) => {
    const result: Array<TDModelForRAW> = JSONDecoder.decode(json);
    return result
  }

  // TDModel（のリスト）をTHREE対応のTDModekに変換するメソッド
  const convert = (tdModelsForRAW: Array<TDModelForRAW>): Array<TDModelForTHREE> => {
    const converter = new THREEConverter();
    const tdModelsForTHREE: Array<TDModelForTHREE> = tdModelsForRAW.map( (tdModelForRAW) => { return converter.convert(tdModelForRAW) });
    return tdModelsForTHREE
  }

  const onClickPrepare = () => {
    const tdModelForRAW = decodeJSON(workJSON);
    const tdModelForTHREE = convert(tdModelForRAW);
    setTDModels(tdModelForTHREE);
  }

  return (
    <div>
      <PlaybackScreen tdModels = { tdModels }/>
      <button onClick = { onClickPrepare }> PREPARE </button>
      <p> { workJSON } </p>
    </div>
  );
};

export default WorkPlayerPanel