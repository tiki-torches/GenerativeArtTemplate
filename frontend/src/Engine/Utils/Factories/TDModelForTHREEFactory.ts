import * as THREE from 'three';
import TDModelForTHREE from "../../WorkComponents/TDModels/TDModelForTHREE"
import { TDModelType } from "../../WorkComponents/InterfacesAndTypes/Types";
import TDMODEL_DICTIONARY from '../../../Engine/Global/TDModelDictionary';

class TDModelForTHREEFactory{

  static generateTDModel(uid: number, type: TDModelType): TDModelForTHREE{

    const generateMesh = (type: TDModelType) => {

      // ジオメトリーを生成
      let geoType = TDMODEL_DICTIONARY.find( (item) => item.type === type);     
      if(geoType === undefined){ console.log('undefined tdmodel-type has been called. automatically assigned box type.') }
      const geometry = geoType? new geoType.class(100, 100, 100): new THREE.BoxGeometry(100, 100, 100);

      const material  = new THREE.MeshMatcapMaterial({ color: 0xffffff });
      const mesh      = new THREE.Mesh(geometry, material);
      return mesh
    }

    const mesh    = generateMesh(type);
    const tdModel = new TDModelForTHREE(uid, type, mesh);
    
    return tdModel

  }

}



export default TDModelForTHREEFactory