// Effect
export type EffectType      = 'ROLL' | 'MOVE' | 'REFLECT';
export type EffectParameter = { x: number, y: number, z: number };

// TDModel
export type TDModelType = 'BOX' | 'SPHERE' | 'PLANE';

// General
export type Vector      = { x: number, y: number, z: number }
export type Coordinate  = { x: number, y: number, z: number }
export type Color       = { r: number, g: number, b: number }