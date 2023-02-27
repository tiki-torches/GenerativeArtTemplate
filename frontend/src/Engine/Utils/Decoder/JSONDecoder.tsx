import { TDModelInterface, WorkModelInterface } from "../../WorkComponents/InterfacesAndTypes/Interfaces";
import TDModelForRAW from "../../WorkComponents/TDModels/TDModelForRAW"
import EffectFactory from "../Factories/EffectFactory";
import TDModelForRAWFactory from "../Factories/TDModelForRAWFactory";

class JSONDecoder {

  static decode(workJSON: string): Array<TDModelForRAW>{

    //  JSONのフォーマットが既定の形式に則っているか検証する
    const isNoError = this.checkFormat(workJSON);
    
    if(true){   // !!! WIP !!!

      // オブジェクトに変換
      const source: WorkModelInterface = JSON.parse(workJSON);

      // RAW形式のTDModelを復元
      const tdModelsForRAWList = source.tdModelsList.map( (source) => {

        // モデルを復元
        const tdModelForRAW = TDModelForRAWFactory.generate(source.uid, source.type);
        tdModelForRAW.property = source.property;

        // Effectを復元
        source.effectsList.forEach( (effectSource) => { 
          const effect = EffectFactory.generate(effectSource.uid, effectSource.type, effectSource.parameter);
          tdModelForRAW.effectsList.push(effect);
        })

        return tdModelForRAW;
      } );
      
      return tdModelsForRAWList

    }
  }

  /**
   * JSONのフォーマットが既定の形式に則っているか検証するメソッド
   * @param workJSON
   */
  static checkFormat(workJSON: string): boolean{
    let isNoError = true;
    /** 検証処理 */
    return isNoError
  }

}


export default JSONDecoder