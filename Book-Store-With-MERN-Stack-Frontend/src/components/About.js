// import { Box, Typography } from "@mui/material";
// import React from "react";

// const About = () => {
//   return (
//     <div>
//       <Box display="flex" flexDirection="column" alignItems="center">
//         <Typography sx={{ fontFamily: "fantasy" }} variant="h2">
//           This is a CRUD Application
//         </Typography>
//         <Typography sx={{ fontFamily: "fantasy" }} variant="h3">
//           By MERN STACK
//         </Typography>
//       </Box>
//     </div>
//   );
// };

// export default About;

import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const cardData = [
  {
    image: 'https://www.bookbrowse.com/images/jackets/9780399562969.jpg',
    title: 'Horse',
    description: 'Winner of the 2022 BookBrowse Fiction Award',
    url: 'https://www.bookbrowse.com/reviews/index.cfm/book_number/4467/horse',
  },
  {
    image: 'https://www.bookbrowse.com/images/previews_images/9781324064824.jpg',
    title: 'The Seven Moons of Maali Almeida',
    description: 'Winner of the 2022 Booker Prize',
    url: 'https://www.bookbrowse.com/bb_briefs/detail/index.cfm/ezine_preview_number/17172/the-seven-moons-of-maali-almeida',
  },
  {
    image: 'https://www.bookbrowse.com/images/jackets-p/1250826462.jpg',
    title: 'Tell Me Everything',
    description: 'Edgar Award for Best Fact Crime',
    url: 'https://www.bookbrowse.com/reviews/index.cfm/book_number/4423/tell-me-everything',
  },
  {
    image: 'https://www.bookbrowse.com/images/previews_images/9780802157942.jpg',
    title: 'Open Water',
    description: 'Costa First Novel Award (formerly Whitbread):',
    url: 'https://www.bookbrowse.com/reviews/index.cfm/book_number/4423/tell-https://www.bookbrowse.com/bb_briefs/detail/index.cfm/ezine_preview_number/16524/open-water',
  },
  // Add more card data as needed
];

export default function ImgMediaCard() {
  const handleLearnMoreClick = (url) => {
    window.location.href = url;
  };

  return (
    <div style={{ display: 'flex' }}>
      {cardData.map((card) => (
        <Card key={card.title} sx={{minWidth:280, maxWidth: 280, marginRight: 5,marginTop: 5,marginLeft:5 }}>
          <CardMedia component="img" alt={card.title} height="280" width="280" image={card.image} />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {card.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {card.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => handleLearnMoreClick(card.url)}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

