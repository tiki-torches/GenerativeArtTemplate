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
  "ROLL", "MOVE"
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

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export function TitlebarBelowImageList() {
  return (

    <ImageList sx={{ width: "100%", height: 450 }}>

      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}

    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
  },
];