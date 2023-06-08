import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Skills(props: any): any {
  const { heading, icon, languages } = props;

  return (
    <div className='flex justify-center'>
      <Accordion className='w-[80%]'>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
          <Typography>
            <h2 className='font-bold text-[20px]'>
              {icon}
              {heading}
            </h2>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{languages}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
