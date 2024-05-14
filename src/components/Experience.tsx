'use client'

import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { useTranslations } from "next-intl";
import Typography from "@mui/material/Typography";

export default function Experience() {
 
  
  return (
    <>
     <div className="flex flex-col">
      <h1 className="text-3xl py-3 text-center">EXPERIENCIA</h1>

      <div className="mt-10">
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="GrayText"
          >
            Frontend Developer - Freelance
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Panaderia COCO
            </Typography>
            <ul>
              <li> - Diseño de interfaz de usuario</li>
              <li> - Armado de base de datos</li>
              <li> - Reunion con cliente para las bases y condiciones</li>
            </ul>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="GrayText"
          >
            Frontend Developer - Freelance
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary"></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Kiosco City 24/7
            </Typography>
            <ul>
              <li>Diseño de interfaz de usuario</li>
              <li>Armado de modulo TPV</li>
              <li></li>
            </ul>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      </div>
     </div>
     
    </>
  );
}
