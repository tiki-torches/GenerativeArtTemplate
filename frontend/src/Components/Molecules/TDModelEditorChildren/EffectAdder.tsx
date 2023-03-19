import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import EffectUIFactory from "../../../Utils/Factories/EffectUIFactory";
import { EffectUIType } from "../../../Utils/Types";
import { EffectUI } from "../../../Utils/WorkComponentsUI";
import EffectExplanator from "./EffectExplanator";

/**
 * Outline	: 指定されたEffectUIを生成するComponent
 * Logic		: - 生成するEffectUIの識別子（EffectType）をユーザーから取得する
 *            - 生成したEffectUIをPropにセットする
 * View			: - XXX
 */


const DICT: Array<EffectUIType> = [
  "ROLL", "MOVE", "REFLECT"
]

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: '70%',
  width: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflowY: "scroll"
};

// Type Declaration of Props
type Props = {
  targetEffects: Array<EffectUI>;   // 生成したEffectUIをセットするリスト
  updateParent: any;
}

export const EffectAdder: React.FC<Props> = ({ targetEffects, updateParent }) => {

  // ___ state ___ ___ ___ ___ ___
  const [ sampleState, setSampleState ] = useState<string>('This is SampleState');
  const [ isModalOpened, setIsModalOpened ] = useState(false);

  // ___ use effect ___ ___ ___ ___ ___
  // useEffect( () => { console.log(sampleState) }, [ sampleState ] );

  // ___ event handler ___ ___ ___ ___ ___
  const onClickEffectExplanator = (target: EffectUIType) => {
    // EffectUIを生成
    const uid: number = targetEffects.length + 1;   // !!! WIP !!!
    const newEffect: EffectUI = EffectUIFactory.generate(uid, target);
    // EffectUIをセットし更新
    targetEffects.push(newEffect);
    updateParent();
  }

  // ___ method ___ ___ ___ ___ ___
  const test = () => {
    console.log('test');
  }
  const openModal   = () => setIsModalOpened(true);
  const closeModal  = () => setIsModalOpened(false);

  return (

    <div>

      <Chip onClick = { openModal } label = 'ADD EFFECT' variant = "outlined"/>

      <Modal open = { isModalOpened } onClose = { closeModal }>

        <Box sx = { style }>

          <Grid container spacing = { 2 }>

            <Grid container item spacing = { 2 } xs = { 12 }>

              {/** EffctTypeの選択肢 */}
              { DICT.map( (effectType: EffectUIType) => {
                return (
                  <Grid key = { effectType } item xs = { 12 } md = { 3 }>
                    <EffectExplanator effectType = { effectType } onClick = { onClickEffectExplanator }/>
                  </Grid>
                )
              })}

            </Grid>

          </Grid>

        </Box>

      </Modal>

    </div>
  );
};

export default EffectAdder