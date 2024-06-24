import {Box, useTheme,Typography} from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { token } from "../../theme";
import { Mode } from "@mui/icons-material";

const FAQ = () => {
    const theme = useTheme();
    const colors = token(theme.palette,Mode);

    return <Box>
        <Header title="FAQ" subtitle="Frequently Asked Question Page"/>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                An Important Question 
            </Typography>
           </AccordionSummary>
           <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Culpa, itaque!
            </Typography>
           </AccordionDetails>
        </Accordion>

        <Accordion  defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                Another Important Question 
            </Typography>
           </AccordionSummary>
           <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Culpa, itaque!
            </Typography>
           </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography color={colors.greenAccent[500]} variant="h5">
             Your Favorite Question 
            </Typography>
           </AccordionSummary>
           <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Culpa, itaque!
            </Typography>
           </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                 Some Random Question 
            </Typography>
           </AccordionSummary>
           <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Culpa, itaque!
            </Typography>
           </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                The Final Question 
            </Typography>
           </AccordionSummary>
           <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Culpa, itaque!
            </Typography>
           </AccordionDetails>
        </Accordion>

      
    </Box>
}
export default FAQ;