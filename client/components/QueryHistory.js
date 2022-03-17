import { useState } from "react";
import { useContext } from 'react';
import { SchemaContext } from '../context/global-context'
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
const test1 = `query {
	people {
	  gender
	  height
	  mass
	  hair_color
	  skin_color
	  eye_color
	  birth_year
	}
}`
const test = [test1, '2', '3', test1, '6', test1, '2', '3', test1, '6', test1]

const QueryHistory = () => {
  const [expanded, setExpanded] = useState('');
  const { codeState, codeDispatch } = useContext(SchemaContext)

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));


  const query = codeState.query.map((query, index) => {
    return (
      <div>
        <Accordion className='bg-dark1 rounded-lg mt-1 justify-center' expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
          <AccordionSummary className='flex rounded-lg bg-dark1 w-[18rem] justify-center'>
            <Typography className='text-white'>Query {index + 1}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <CodeMirror
                value={query}
                theme='dark'
                extensions={[javascript({ jsx: true })]}
                editable={false}
              />
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    )
  })
  return (
    <div className='flex flex-col justify-start p-4 max-h-[50rem] overflow-auto'>
      {query}
    </div>
  )
}

export default QueryHistory;