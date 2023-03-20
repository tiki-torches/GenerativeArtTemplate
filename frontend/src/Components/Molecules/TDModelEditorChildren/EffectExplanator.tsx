import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import { EffectUIType } from "../../../Utils/Types";
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { EFFECT_DICTIONARY } from "../../../Global/Dictionaries/EffectDictionary";

/**
 * Outline	: XXXするComponent
 * Logic		: - AAAをBBBにする
 *            - 親ComponentからCCCを受け取り、DDDとしたものを子Componentに渡す
 * View			: - KKKをリスト表示する
 */

// Type Declaration of Props
type Props = {
  target: EffectUIType
}

export const EffectExplanator: React.FC<Props> = ({ target }) => {

  // ___ state ___ ___ ___ ___ ___
  const [ sampleState, setSampleState ] = useState<string>('This is SampleState');

  // ___ use effect ___ ___ ___ ___ ___
  useEffect( () => { console.log(sampleState) }, [ sampleState ] );

  // ___ event handler ___ ___ ___ ___ ___
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setSampleState(newValue);
  };

  // ___ method ___ ___ ___ ___ ___
  const test = () => {
    console.log('test');
  }

  const getImageSrc = (target: EffectUIType): string | undefined => {
    const result = EFFECT_DICTIONARY.find( (item) => { return item.type === target  } );
    const src = result?.img;
    return src
  }

  return (

    <Container maxWidth = 'sm'>
      {/** muiのGridブレークポイントsmが600ptと同値 */}
      <Card sx = {{ maxWidth: 600 }}>
        <CardMedia
          component = "img"
          height    = "200"
          image     = { getImageSrc(target) }
          alt       = { target }
        />
      </Card>
    </Container>

  );
};

export default EffectExplanator 