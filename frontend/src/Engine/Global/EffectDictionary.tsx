import { EffectType } from "../WorkComponents/InterfacesAndTypes/Types";

// priorityは値が小さいほど優先度が低い
// 値が小さいほどEffect適用時に先に実行される つまり後に実行されるEffectに上書きされる可能性がある
type Dict = { type: EffectType, priority: number }
const EFFECT_DICTIONARY: Array<Dict> = [
    { type: "MOVE", priority: 100 },
    { type: "ROLL", priority: 200 },
    { type: "REFLECT", priority: 1000 }
]

export default EFFECT_DICTIONARY;