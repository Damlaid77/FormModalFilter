import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'

export const MuiAccordion = () => {
    const [expanded, setExpanded] = useState<string | false>(false)
    const hanleChange = (isExpanded: boolean, panel: string) => {
        setExpanded(isExpanded ? panel : false)
    }
  return (
    <div>
        <Accordion expanded={expanded === 'panel1'} 
            onChange={(event, isExpanded) => hanleChange(isExpanded, 'panel1')}
        >
            <AccordionSummary 
                id='panel1-header' 
                aria-controls='panel1-content'
                expandIcon={<ExpandMoreIcon/>}
            >
                <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui accusamus magnam nulla facere explicabo tempore ex ipsa. Optio voluptate non perspiciatis? Aliquid numquam adipisci autem beatae molestiae deserunt eaque hic sed? Sunt dolor quaerat fuga quos vel aliquid necessitatibus sit eum porro eius, optio facilis dignissimos fugit esse excepturi accusantium ad nulla iusto quo soluta dolorum cumque quasi pariatur consequatur! Vel quisquam repellendus provident dolore impedit architecto, fugit sed veniam debitis, modi, error neque saepe sint perferendis possimus id. Fugiat nulla ullam alias voluptatibus aperiam error eum, assumenda ipsa quisquam voluptatem velit, qui accusantium molestias est, temporibus dolorum amet? Asperiores.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'}
            onChange={(event, isExpanded) => hanleChange(isExpanded, 'panel2')}
        >
            <AccordionSummary 
                id='panel3-header' 
                aria-controls='panel3-content'
                expandIcon={<ExpandMoreIcon/>}
            >
                <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui accusamus magnam nulla facere explicabo tempore ex ipsa. Optio voluptate non perspiciatis? Aliquid numquam adipisci autem beatae molestiae deserunt eaque hic sed? Sunt dolor quaerat fuga quos vel aliquid necessitatibus sit eum porro eius, optio facilis dignissimos fugit esse excepturi accusantium ad nulla iusto quo soluta dolorum cumque quasi pariatur consequatur! Vel quisquam repellendus provident dolore impedit architecto, fugit sed veniam debitis, modi, error neque saepe sint perferendis possimus id. Fugiat nulla ullam alias voluptatibus aperiam error eum, assumenda ipsa quisquam voluptatem velit, qui accusantium molestias est, temporibus dolorum amet? Asperiores.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'}
            onChange={(event, isExpanded) => hanleChange(isExpanded, 'panel3')}
        >
            <AccordionSummary 
                id='panel2-header' 
                aria-controls='panel2-content'
                expandIcon={<ExpandMoreIcon/>}
            >
                <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui accusamus magnam nulla facere explicabo tempore ex ipsa. Optio voluptate non perspiciatis? Aliquid numquam adipisci autem beatae molestiae deserunt eaque hic sed? Sunt dolor quaerat fuga quos vel aliquid necessitatibus sit eum porro eius, optio facilis dignissimos fugit esse excepturi accusantium ad nulla iusto quo soluta dolorum cumque quasi pariatur consequatur! Vel quisquam repellendus provident dolore impedit architecto, fugit sed veniam debitis, modi, error neque saepe sint perferendis possimus id. Fugiat nulla ullam alias voluptatibus aperiam error eum, assumenda ipsa quisquam voluptatem velit, qui accusantium molestias est, temporibus dolorum amet? Asperiores.
                </Typography>
            </AccordionDetails>
        </Accordion>
    </div>
  )
}
