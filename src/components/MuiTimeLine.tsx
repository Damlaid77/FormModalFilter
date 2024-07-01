import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab'
import React from 'react'

export const MuiTimeLine = () => {
  return (
    <Timeline>
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot/>
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>
                City A
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot/>
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>
                City B
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot/>
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>
                City C
            </TimelineContent>
        </TimelineItem>
    </Timeline>
  )
}
