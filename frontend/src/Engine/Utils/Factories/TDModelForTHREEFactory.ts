import * as THREE from 'three';
import TDModelForTHREE from "../../WorkComponents/TDModels/TDModelForTHREE"
import { TDModelType } from "../../../Utils/Types";
import EffectRoll from '../../../Engine/WorkComponents/Effects/EffectRoll';


class TDModelForTHREEFactory{

  static generateTDModel(uid: number, type: TDModelType): TDModelForTHREE{

    const generateMesh = () => {
      const geometry  = new THREE.BoxGeometry(100, 100, 100);
      const material  = new THREE.MeshMatcapMaterial({ color: 0xffffff });
      const mesh      = new THREE.Mesh(geometry, material);
      return mesh
    }

    const mesh    = generateMesh();
    const tdModel = new TDModelForTHREE(uid, type, mesh);
    
    return tdModel

  }

  static generateSample(): TDModelForTHREE{

    const generateMesh = () => {
      const geometry  = new THREE.BoxGeometry(100, 100, 100);
      const material  = new THREE.MeshMatcapMaterial({ color: 0xffffff });
      const mesh      = new THREE.Mesh(geometry, material);
      return mesh
    }
    const mesh    = generateMesh();
    const tdModel = new TDModelForTHREE(1, "CUBE", mesh);

    const generateEffect = () => {
      const sampleEffect = new EffectRoll(1, { x: 0.01, y: 0, z: 0 });
      return sampleEffect
    }
    const sampleEffect = generateEffect();
    tdModel.effectsList.push(sampleEffect);

    return tdModel
  }

}


export default TDModelForTHREEFactory