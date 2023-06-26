import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

interface cardProps {
    name: string,
    path: string,
    image:any,
    description:string
}

const Cards: React.FC<cardProps> = ({
    name,
    path,
    image,
    description
}) => {
  return (
    <div id='Proyectos'>
        <Card sx={{ maxWidth: 345 }} className=''>
        <CardMedia
        sx={{ height: 140 }}
        image={image}
        title="logo image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
       <Link href={`${path}`} className='mx-4 hover:opacity-40 cursor-pointer transition duration-700 ease-in-out '>
          Ver proyecto
       </Link>
      </CardActions>
    </Card>
    </div>
  )
}

export default Cards