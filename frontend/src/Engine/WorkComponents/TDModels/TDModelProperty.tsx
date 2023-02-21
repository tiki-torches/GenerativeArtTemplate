import { Color, Coordinate, Vector } from "../../../Utils/Types";


/**
 * 3Dモデルの状態を示す情報
 */
class TDModelProperty {

  position: Coordinate;
  vector  : Vector;
  rotation: Vector;
  color   : Color;

  constructor(){
    this.position = { x: 0, y: 0, z: 0 };
    this.vector   = { x: 0, y: 0, z: 0 };
    this.rotation = { x: 0, y: 0, z: 0 };
    this.color    = { r: 0, g: 0, b: 0 };
  }

}

export default TDModelProperty