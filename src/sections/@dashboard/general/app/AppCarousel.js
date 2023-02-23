import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { m } from 'framer-motion';
import React, { useState, useRef } from 'react';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { CardContent, Box, Card, Typography, Link } from '@mui/material';
// components
import Image from '../../../../components/Image';
import API from '../../../../Helper/api';
import { MotionContainer, varFade } from '../../../../components/animate';
import { CarouselDots, CarouselArrows } from '../../../../components/carousel';

// ----------------------------------------------------------------------

const OverlayStyle = styled('div')(({ theme }) => ({
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 4,
  position: 'absolute',
  backgroundColor: alpha(theme.palette.grey[900], 0.2),
}));

// ----------------------------------------------------------------------

AppCarousel.propTypes = {
  list: PropTypes.array.isRequired,
};

export default function AppCarousel({ list, ...other }) {
  const theme = useTheme();

  const carouselRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(theme.direction === 'rtl' ? list.length - 1 : 0);
  const [property, setProperty] = React.useState([]);

  React.useEffect(() => {
    const facilityCode = window.location.pathname.split('/')[3];
    API.get(
      `/api/WebsiteAPI/GetPropertyData?APIKey=eJgDBiLVjroiksSVS8jLW5YXcHUAJOe5ZeOx80T9mzo=&FacilityCode=${facilityCode}`
    ).then((response) => {
      console.log(response.data);
      setProperty(response.data.propertyObject ? response.data.propertyObject : {});
    });
  }, []);

  const settings = {
    speed: 800,
    dots: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    beforeChange: (current, next) => setCurrentIndex(next),
    ...CarouselDots({
      zIndex: 9,
      top: 24,
      left: 24,
      position: 'absolute',
    }),
  };

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <Card {...other}>
      <Slider ref={carouselRef} {...settings}>
        {list.map((app, index) => (
          <CarouselItem key={app.id} item={app} isActive={index === currentIndex} index={index + 1} />
        ))}
      </Slider>

      {/* <CarouselArrows
        onNext={handleNext}
        onPrevious={handlePrevious}
        spacing={0}
        sx={{
          top: 16,
          right: 16,
          position: 'absolute',
          '& .arrow': {
            p: 0,
            width: 32,
            height: 32,
            opacity: 0.48,
            color: 'common.white',
            '&:hover': { color: 'common.white', opacity: 1 },
          },
        }}
      /> */}
    </Card>
  );
}

// ----------------------------------------------------------------------

CarouselItem.propTypes = {
  isActive: PropTypes.bool,
  property: PropTypes.string,
  item: PropTypes.shape({
    image: PropTypes.string,
  }),
};

function CarouselItem({ item, isActive, index, property }) {
  const { photoURL } = item;

  return (
    <Box sx={{ position: 'relative', width: '300%' }}>
      <CardContent
        component={MotionContainer}
        animate={isActive}
        action
        sx={{
          bottom: 0,
          width: 1,
          zIndex: 9,
          textAlign: 'left',
          position: 'absolute',
          color: 'common.white',
          top: '10%',
        }}
      >
        {/* <m.div variants={varFade().inRight}>
          <Typography variant="overline" component="div" sx={{ mb: 1, opacity: 0.48 }}>
            Featured App
          </Typography>
        </m.div> */}

        {/* <m.div variants={varFade().inRight}>
          <Link color="inherit" underline="none">
            <Typography
              gutterBottom
              noWrap
              sx={{
                fontWeight: '900',
                fontSize: { lg: '32px', xs: '14px', md: '26px' },
                marginTop: { xs: '10px' },
                right: { xs: '5px' },
              }}
            >
              {title}
            </Typography>
          </Link>
        </m.div>

        <m.div variants={varFade().inRight}>
          <Typography variant="body2" noWrap sx={{ fontSize: { lg: '20px', xs: '11px', md: '14px' } }}>
            {description}
          </Typography>
        </m.div> */}
      </CardContent>

      <OverlayStyle />

      <Image alt="" src={photoURL} />

      {/* {property.listOfFacilityImages?.length > 0 ? (
        <div>
          <img alt={title} src={property.listOfFacilityImages[0]?.photoURL} />
        </div>
      ) : (
        <img src={''} alt="" />
      )} */}
    </Box>
  );
}
