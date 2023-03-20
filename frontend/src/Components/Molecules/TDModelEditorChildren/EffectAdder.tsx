import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import EffectUIFactory from "../../../Utils/Factories/EffectUIFactory";
import { EffectUIType } from "../../../Utils/Types";
import { EffectUI } from "../../../Utils/WorkComponentsUI";
import EffectChoice from "./EffectChoice";
import EffectExplanator from "./EffectExplanator";
import { DictItem, EFFECT_DICTIONARY } from "../../../Global/Dictionaries/EffectDictionary";

/**
 * Outline	: 指定されたEffectUIを生成するComponent
 * Logic		: - 生成するEffectUIの識別子（EffectType）をユーザーから取得する
 *            - 生成したEffectUIをPropにセットする
 * View			: - XXX
 */

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
};

const style2 = {
  height: '50%',
  width: '100%',
};

const style3 = {
  height: '40%',
  width: '100%',
  overflowY: "scroll",
};

const style4 = {
  height: '10%',
  width: '100%',
};

// Type Declaration of Props
type Props = {
  targetEffects: Array<EffectUI>;   // 生成したEffectUIをセットするリスト
  updateParent: any;
}

export const EffectAdder: React.FC<Props> = ({ targetEffects, updateParent }) => {

  // ___ state ___ ___ ___ ___ ___
  const [ sampleState, setSampleState ] = useState<string>('This is SampleState');
  const [ targetType, setTargetType ] = useState<EffectUIType>("MOVE");
  const [ isModalOpened, setIsModalOpened ] = useState<boolean>(false);

  // ___ use effect ___ ___ ___ ___ ___
  // useEffect( () => { console.log(sampleState) }, [ sampleState ] );

  // ___ event handler ___ ___ ___ ___ ___
  const onClickEffectChoice = (target: EffectUIType) => {
    setTargetType(target);
    updateParent();
  }

  const onClickAddButton = () => {
    // EffectUIを生成
    const uid: number = targetEffects.length + 1;   // !!! WIP !!!
    const newEffect: EffectUI = EffectUIFactory.generate(uid, targetType);
    // EffectUIをセットし更新
    targetEffects.push(newEffect);
    updateParent();
  }

  // ___ method ___ ___ ___ ___ ___
  const openModal   = () => setIsModalOpened(true);
  const closeModal  = () => setIsModalOpened(false);

  return (

    <div>

      <Chip onClick = { openModal } label = 'ADD EFFECT' variant = "outlined"/>

      <Modal open = { isModalOpened } onClose = { closeModal }>

        <Box sx = { style }>

          <Box sx = { style2 }>
            <EffectExplanator target = { targetType } />
          </Box>
          
          <Box sx = { style3 }>
            <Grid container spacing = { 2 }>
              {/** EffctTypeの選択肢 */}
              { EFFECT_DICTIONARY.map( (item: DictItem) => {

                const isSelected = (item.type === targetType)? true: false
                return (
                  <Grid key = { item.type } item xs = { 12 } md = { 3 }>
                    <EffectChoice effectType = { item.type } isSelected = { isSelected } onClick = { onClickEffectChoice }/>
                  </Grid>
                )
              })}
            </Grid>
          </Box>

          <Box sx = { style4 }>
            <Chip onClick = { onClickAddButton } label = 'ADD EFFECT' variant = "outlined"/>
          </Box>

        </Box>

      </Modal>

    </div>
  );
};

export default EffectAdder