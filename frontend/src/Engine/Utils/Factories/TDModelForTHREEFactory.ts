import * as THREE from 'three';
import TDModelForTHREE from "../../WorkComponents/TDModels/TDModelForTHREE"
import { TDModelType } from "../../WorkComponents/InterfacesAndTypes/Types";

class TDModelForTHREEFactory{

  static generateTDModel(uid: number, type: TDModelType): TDModelForTHREE{

    // TODO: typeに応じたmeshを生成するように変更する

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

}


export default TDModelForTHREEFactory