/** 
 * MEMO:  Engine内にもほぼ同様の定義ファイルが存在するが、意図的に共通化を避けている
 *        これは、Engineを改修した際に、意図せずUIにも変更が反映される状況を防ぐため
 *        また、混在を防ぐため各変数名には`UI`を識別子として設定する
 * */

// Effect
export type EffectUIType      = "ROLL" | "MOVE";
export type EffectUIParameter = { x: number, y: number, z: number };

// TDModel
export type TDModelUIType = "CUBE" | "BALL";

// General
export type VectorUI      = { x: number, y: number, z: number }
export type CoordinateUI  = { x: number, y: number, z: number }
export type ColorUI       = { r: number, g: number, b: number }