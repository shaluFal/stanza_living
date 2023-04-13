import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { m } from 'framer-motion';
import { useState, useRef } from 'react';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { CardContent, Box, Card, Typography, Link } from '@mui/material';
// components
import Image from '../../../../components/Image';
import { MotionContainer, varFade } from '../../../../components/animate';
import { CarouselDots, CarouselArrows } from '../../../../components/carousel';
import feed1 from '../../../../images/feed_1.jpg';
import feed2 from '../../../../images/feed_2.jpg';
import feed3 from '../../../../images/feed_3.jpg';
import feed4 from '../../../../images/feed_4.jpg';

// ----------------------------------------------------------------------

const OverlayStyle = styled('div')(({ theme }) => ({
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 4,
  position: 'absolute',
  // backgroundColor: "#fff",
}));

// ----------------------------------------------------------------------

AppFeatured.propTypes = {
  list: PropTypes.array.isRequired,
};

export default function AppFeatured({ list, ...other }) {
  const theme = useTheme();

  const carouselRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(theme.direction === 'rtl' ? list.length - 1 : 0);

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
  item: PropTypes.shape({
    description: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
  }),
};

function CarouselItem({ item, isActive, index }) {
  const { image, title, description } = item;

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
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
          color: 'rgb(35 39 40/var(--tw-text-opacity))',
          top: '10%',
        }}
      >
        <m.div variants={varFade().inRight}>
          <Link color="inherit" underline="none">
            <Typography
              variant="h3"
              gutterBottom
              noWrap
              sx={{
                fontWeight: '900',
                marginTop: { xs: '10px', lg: '60px' },
                right: { xs: '5px' },
                fontSize: { xs: '15.5px', lg: '38px', md: '26px', xl: '50px' },
              }}
            >
              {title}
            </Typography>
          </Link>
        </m.div>

        <m.div variants={varFade().inRight}>
          <Typography variant="p" noWrap sx={{ fontSize: { lg: '20px', xs: '12px', md: '14px' } }}>
            {description}
          </Typography>
        </m.div>
      </CardContent>

      <OverlayStyle />

      <Image
        alt={title}
        src={index === 1 && feed1}
        style={{ width: '53%', borderRadius: '20px 20px 20px 20px', backgroundColor: 'white', marginLeft: '50%' }}
      />
      <Image
        alt={title}
        src={index === 2 && feed2}
        style={{ width: '53%', borderRadius: '20px 20px 20px 20px', backgroundColor: 'white', marginLeft: '50%' }}
      />
      <Image
        alt={title}
        src={index === 3 && feed3}
        style={{ width: '53%', borderRadius: '20px 20px 20px 20px', backgroundColor: 'white', marginLeft: '50%' }}
      />
      <Image
        alt={title}
        src={index === 4 && feed4}
        style={{ width: '53%', borderRadius: '20px 20px 20px 20px', backgroundColor: 'white', marginLeft: '50%' }}
      />

      {/* <img alt={title} src={`../../../../images/feed_${index}.jpg`} style={{width: "56.5%", borderRadius: "20px 20px 20px 20px", backgroundColor: "white", marginLeft: "50%"}} /> */}
      {/* sx={{ height: { xs: 300, md: 260, lg: 512 }, width: {xs: 320, md: 1200, lg: 850}, textAlign: 'left' }} */}
    </Box>
  );
}
