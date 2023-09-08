import React from "react";
import { CarouselDefault } from "./Carousel";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import Link from "next/link";

interface cardProps {
  name?: string;
  path?: string;
  image?: any;
  description?: string;
}

const CardContainer: React.FC<cardProps> = ({
  name,
  path,
  image,
  description,
}) => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={image} title="logo image" />
        <CardContent>
          <Typography
            variant="h6"
            component="div"
            className="tablet:text-sm tablet:flex"
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="tablet:flex"
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Link
          target="_blank"
            href={`${path}`}
            
            className="mx-4 hover:opacity-40 cursor-pointer transition duration-700 ease-in-out "
          >
            Ver proyecto
          </Link>
        </CardActions>
      </Card>
    </>
  );
};

export default CardContainer;
