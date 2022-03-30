import { useContext } from "react";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import { HistoryContext } from '../context/global-context'

const QueryHistory = () => {

  const { codeState, displayState, displayDispatch, speedState } = useContext(HistoryContext)

  const handleChange = (panel) => (event, newExpanded) => {
    displayDispatch({
      type: 'UPDATE_HISTORY_DISPLAY',
      payload: newExpanded ? panel : false
  });
}
    
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
    borderTop: '1px solid #5304EE',
  }));


  const query = codeState.query.map((query, index) => {
    return (
      <div>
        <Accordion className='bg-darkGrey rounded-lg mt-1 justify-center' expanded={displayState.history === `panel${index}`} onChange={handleChange(`panel${index}`)}>
          <AccordionSummary className='flex rounded-lg bg-purple2 w-[15.5vw] justify-center'>
            <Typography className='text-white1'>Query {index + 1} <br></br>Speed : {speedState.speed[index].toFixed()}ms</Typography>
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
    <div className='flex flex-col justify-start p-4 max-h-[45vw] overflow-auto'>
      {query}
    </div>
  )
}

export default QueryHistory;