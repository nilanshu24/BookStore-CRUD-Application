// import { Button, Typography, Box } from "@mui/material";
// import React from "react";
// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <div style={{
//       backgroundImage:'url("https://i.pinimg.com/originals/67/18/22/671822c2f63dd5f65d8fd15c9710420b.jpg")',backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundSize: 'cover',height:'100vh',
//       marginTop:'-70px',
//       fontSize:'50px',
//     }}>
//       <Box display="flex" flexDirection="column" alignItems="center" alignSelf="center" >
//         <Button
//           LinkComponent={Link}
//           to="/books"
//           sx={{ marginTop: 15, background: "black" }}
//           variant="contained"
//           alignSelf="center"
//         >
//          <h1>Book Store</h1> 
//         </Button>
//       </Box>
//     </div>
//   );
// };

// export default Home;

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const images = [
  {
    url: 'https://i.pinimg.com/originals/67/18/22/671822c2f63dd5f65d8fd15c9710420b.jpg',
    title: 'Book Store',
    width: '100%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  height: 649,
  backgroundSize: 'cover',
  backgroundPosition: '100%',
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 200,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: '100%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  backgroundPosition: '100%',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 100,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(40% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function ButtonBases() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/books');
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%',alignItems: 'center',
    justifyContent: 'center',
    height: '80vh', // Adjust the height to cover the entire viewport
    backgroundSize: 'cover',
    backgroundPosition: 'center', }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
          onClick={handleClick}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                fontSize: '50px', // Modify the font size to your desired value
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}
