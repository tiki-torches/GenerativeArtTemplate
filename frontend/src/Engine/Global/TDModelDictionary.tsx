import * as THREE from 'three';
import { TDModelType } from '../WorkComponents/InterfacesAndTypes/Types';
import { EffectType } from "../WorkComponents/InterfacesAndTypes/Types";

type TDModelDictItem = { type: TDModelType, class: any }
const TDMODEL_DICTIONARY: Array<TDModelDictItem> = [
  { type: 'BOX',     class: THREE.BoxGeometry },
  { type: 'SPHERE', class: THREE.SphereGeometry },
  { type: 'PLANE',  class: THREE.PlaneGeometry },
]

export default TDMODEL_DICTIONARY;