import React, { useEffect, useState } from "react";
import { WorkPlayerInterface } from "../../Engine/WorkComponents/InterfacesAndTypes/Interfaces";
import WorkPlayerForRAW from "../../Engine/WorkComponents/WorkPlayer/WorkPlayerForRAW";
import TDModelFactory from "../../Engine/Utils/Factories/TDModelFactory";

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

export const PlaybackScreenDev : React.FC<Props> = ({ sampleProp }) => {

  // ___ state ___ ___ ___ ___ ___
  const [ sampleState, setSampleState ] = useState<any>("sample");
  const [ workPlayer, setWorkPlayer ] = useState<WorkPlayerInterface>();
  const [ intervalID, setIntervalID ] = useState<any>();


  // ___ use effect ___ ___ ___ ___ ___
  // useEffect( () => { console.log(sampleState) }, [ sampleState ] );
  useEffect( () => { construct() }, [ ] );  // 初回レンダー時のみ実行 useEffectに空配列を渡すことで初回のみに限定できる
  // useEffect( () => { play() }, [] );     // 描画処理はdidMount後の実行でなければ、null参照エラー（Cannot read property 'width' of null）が発生する
  
  // ___ event handler ___ ___ ___ ___ ___
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
  };

  // ___ method ___ ___ ___ ___ ___
  const test = () => {
    console.log('test');
  }

  const construct = () => {
    const canvas: HTMLCanvasElement = document.querySelector("#canvasDev") as HTMLCanvasElement;
    const workPlayer = new WorkPlayerForRAW(canvas);
    setWorkPlayer(workPlayer);
  }

  const play = () => {
    const sample = TDModelFactory.createSample();
    workPlayer?.play(sample);
    let intervalID = setInterval(update, 1000);
    setIntervalID(intervalID);
  };

  const stop = () => {
    workPlayer?.stop();
    clearInterval(intervalID);
  }

  const update = () => {
    workPlayer?.tdModelMemo?

      setSampleState(JSON.stringify(workPlayer?.tdModelMemo))
      :
      setSampleState("undefined");

  }

  return (
    <div>
      <h2>{ PlaybackScreenDev.name }</h2>
      <canvas id = 'canvasDev'/>
      <button onClick = { play }>PLAY</button>
      <button onClick = { stop }>STOP</button>
      <p> { sampleState } </p>
    </div>
  );
  
};

export default PlaybackScreenDev