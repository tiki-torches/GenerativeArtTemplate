import { EffectUIType } from "../../Utils/Types"

export type DictItem = { type: EffectUIType, img: string | undefined, ui: any }
export const EFFECT_DICTIONARY: Array<DictItem> = [
  { type: "MOVE", img: 'https://mui.com/static/images/cards/contemplative-reptile.jpg', ui: undefined },
  { type: "ROLL", img: 'https://mui.com/static/images/cards/paella.jpg', ui: undefined },
  { type: "REFLECT", img: undefined, ui: undefined },
]