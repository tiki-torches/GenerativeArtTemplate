import React, { useEffect, useState } from "react";
import { EffectUIType } from "../../../Utils/Types";
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';

/**
 * Outline	: XXXするComponent
 * Logic		: - AAAをBBBにする
 *            - 親ComponentからCCCを受け取り、DDDとしたものを子Componentに渡す
 * View			: - KKKをリスト表示する
 */

// Type Declaration of Props
type Props = {
  effectType  : EffectUIType;
  isSelected  : boolean;
  onClick     : any;
}

export const EffectChoice: React.FC<Props> = ({ effectType, isSelected, onClick　}) => {

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
  
  const onClickCard = () => {
    onClick(effectType);
  }

  return (
    <Card onClick = { onClickCard } variant = "outlined" >

      <CardActionArea>

        <Box sx = {{ display: 'flex' }}>

          <CardContent style = {{ width: 10 }}>
            { isSelected? <CheckIcon/>: undefined }
          </CardContent>
          
          <CardContent>
            <Typography> { effectType } </Typography>
          </CardContent>

        </Box>

      </CardActionArea>

    </Card>
  );
};

export default EffectChoice 