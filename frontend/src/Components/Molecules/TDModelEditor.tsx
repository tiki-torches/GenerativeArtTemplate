import React, { useEffect, useState } from "react";
import { TDModelUI } from "src/Utils/WorkComponentsUI";

/**
 * Outline	: XXXするComponent
 * Logic		: - AAAをBBBにする
 *            - 親ComponentからCCCを受け取り、DDDとしたものを子Componentに渡す
 * View			: - KKKをリスト表示する
 */

// Type Declaration of Props
type Props = {
  tdModel : TDModelUI;
}

export const TDModelEditor : React.FC<Props> = ({ tdModel }) => {

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
      <p> { JSON.stringify(tdModel) } </p>
    </div>
  );
  
};

export default TDModelEditor