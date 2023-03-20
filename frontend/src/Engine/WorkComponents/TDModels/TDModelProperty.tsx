import { Color, Coordinate, Vector } from "../InterfacesAndTypes/Types";


/**
 * 3Dモデルの状態を示す情報
 */
class TDModelProperty {

  position: Coordinate;
  vector  : Vector;
  rotation: Vector;
  color   : Color;
  vectorReversal: { x: 1|-1, y: 1|-1, z: 1|-1 };

  constructor(){
    this.position = { x: 0, y: 0, z: 0 };
    this.vector   = { x: 0, y: 0, z: 0 };
    this.rotation = { x: 0, y: 0, z: 0 };
    this.color    = { r: 0, g: 0, b: 0 };
    this.vectorReversal = { x: 1, y: 1, z: 1 };
  }

}

export default TDModelProperty