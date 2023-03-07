import React, { useEffect, useState } from "react";
import { EffectUI } from "../../../Utils/WorkComponentsUI";
import VectorInput from "../InputForms/VectorInput";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

/**
 * Outline	: XXXするComponent
 * Logic		: - AAAをBBBにする
 *            - 親ComponentからCCCを受け取り、DDDとしたものを子Componentに渡す
 * View			: - KKKをリスト表示する
 */

// Type Declaration of Props
type Props = {
  effect        : EffectUI;
  updateParent  : any;
  removeEffect  : any;
}

export const EffectEditor: React.FC<Props> = ({ effect, updateParent, removeEffect }) => {

  // ___ state ___ ___ ___ ___ ___
  const [ sampleState, setSampleState ] = useState<string>('This is SampleState');

  // ___ use effect ___ ___ ___ ___ ___

  // ___ event handler ___ ___ ___ ___ ___
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSampleState(newValue);
  };

  const onClickRemoveButton = () => {
    removeEffect(effect);
  }

  // ___ method ___ ___ ___ ___ ___


  return (

    <Card variant = "outlined">

      <CardContent>

        <Typography variant="h5">
          { effect.type }
        </Typography>

        <VectorInput targetVal = { effect.parameter } updateParent = { updateParent }/>

      </CardContent>

      <CardActions>
        <Stack spacing = { 2 }>
          <Chip onDelete = { onClickRemoveButton } label = "Delete" variant = "outlined"  color = "warning"/>
        </Stack>
      </CardActions>

    </Card>
    
  );
};

export default EffectEditor