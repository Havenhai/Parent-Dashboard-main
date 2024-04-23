
import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {tokens} from "../../theme"

function FAQ () {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How can Chatterchum help my child improve their speech skills at home?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography >
          

Chatter Chum App is designed to aid in improving speech delay in children through engaging activities and exercises. While our app can be a valuable tool in supporting speech development, it is important to note that it does not guarantee a cure for the condition. <br />
<br />
Speech delay can be a complex issue with various underlying causes, and individual responses to intervention may vary. Our app should be seen as a supplemental resource, and its effectiveness may depend on factors such as consistent usage, the severity of the delay, and the child's unique characteristics. <br />
<br />
We strongly advise parents and caregivers to seek guidance from qualified professionals, such as speech-language therapists or pediatricians, for a comprehensive evaluation and personalized therapy plan. Our app is intended to complement therapeutic interventions, not replace them.

By using Chatter Chum App, parents and caregivers acknowledge that it is their responsibility to take proactive steps in seeking appropriate support and guidance from qualified professionals to address their child's speech delay effectively.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What causes delayed speech in children?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
        
       Delayed speech can have various causes, including genetic factors, developmental delays, hearing impairment, neurological conditions, and environmental factors. Please consult a speech therapist or healthcare provider for further information and guidance tailored to your child's unique needs.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What role does early intervention play in improving speech delays?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Early intervention is crucial for addressing speech delays as it can help prevent further delays and improve long-term outcomes. Speech therapy, behavioral interventions, and parent training programs are common components of early intervention. For more specialized insight, kindly consult a specialist.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Is delayed speech a sign of a more significant developmental issue?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Not necessarily. Many children with delayed speech catch up to their peers with appropriate intervention and support. However, delayed speech can sometimes be a sign of an underlying developmental issue that requires further evaluation.Please consult a speech therapist or healthcare provider for further information.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What happens when my child continually fails to keep up with ChatterChum lessons?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          As a parent/guardian, you have the right to advocate for your child's needs in school. This may involve working with teachers, administrators, and special education professionals to develop an Individualized Education Program (IEP) or A complementary strategy plan tailored to your child's speech and language goals.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
