import React, { useEffect, useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props{
  label     ?: any;
  contents  ?: any;
}

export const BasicAccordion: React.FC<Props> = (props: Props) => {

  // ___ state ___ ___ ___ ___ ___
  const [ sampleState, setSampleState ] = useState<string>('This is SampleState');


  return (

    <Accordion style = {{ border: '1px solid rgba(0, 0, 0, .125)', boxShadow: 'none' }}>
      
      <AccordionSummary
        expandIcon    = { <ExpandMoreIcon /> }
        aria-controls = "panel1a-content"
        id            = "panel1a-header"
      >
        <Typography> { props.label } </Typography>
      </AccordionSummary>

      <AccordionDetails>
        { props.contents }
      </AccordionDetails>

    </Accordion>
    
  );
}

const style = {
  position  : 'absolute' as 'absolute',
  top       : '50%',
  left      : '50%',
  transform : 'translate(-50%, -50%)',
  width     : '50%',
  maxWidth  : 500,
  bgcolor   : 'background.paper',
  border    : '2px solid #000',
  boxShadow : 24,
  p         : 4,
};

export default BasicAccordion