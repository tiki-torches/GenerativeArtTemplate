import React, { useEffect, useState } from "react";
import TDModelForTHREEFactory from "../../Engine/Utils/Factories/TDModelForTHREEFactory";
import { WorkPlayerInterface } from "../../Engine/WorkComponents/InterfacesAndTypes/Interfaces";
import WorkPlayerForTHREE from "../../Engine/WorkComponents/WorkPlayer/WorkPlayerForTHREE";

/**
 * Outline	: XXXするComponent
 * Logic		: - AAAをBBBにする
 *            - 親ComponentからCCCを受け取り、DDDとしたものを子Componentに渡す
 * View			: - KKKをリスト表示する
 */

// Type Declaration of Props
type Props = {
  sampleProp ?: any;
}

export const PlaybackScreen : React.FC<Props> = ({ sampleProp }) => {

  // ___ state ___ ___ ___ ___ ___
  const [ workPlayer, setWorkPlayer ] = useState<WorkPlayerForTHREE>();
  const [ workData, setWorkData ] = useState<any>();

  // ___ use effect ___ ___ ___ ___ ___
  useEffect( () => { construct() }, [ ] );    // 初回レンダー時のみ実行 useEffectの依存対象に空配列を指定することで初回のみに限定できる
  
  // ___ event handler ___ ___ ___ ___ ___
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
  };

  // ___ method ___ ___ ___ ___ ___
  const test = () => {
    console.log('test');
  }

  const construct = () => {
    const canvas: HTMLCanvasElement = document.querySelector("#canvas") as HTMLCanvasElement;
    const workPlayer = new WorkPlayerForTHREE(canvas);
    setWorkPlayer(workPlayer);
    setWorkData([ TDModelForTHREEFactory.generateSample() ]);
  }

  const play = () => {
    workPlayer?.play(workData);
  };

  const stop = () => {
    workPlayer?.stop();
  }

  const reset = () => {
    workPlayer?.reset();
    setWorkData([ TDModelForTHREEFactory.generateSample() ]);
  }

  return (
    <div>
      <h2>{ PlaybackScreen.name }</h2>
      <canvas id = 'canvas'/>
      <button onClick = { play }>PLAY</button>
      <button onClick = { stop }>STOP</button>
      <button onClick = { reset }>RESET</button>
    </div>
  );
  
};



export default PlaybackScreen