import { m } from 'framer-motion';
import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, Navigate, useNavigate } from 'react-router-dom';
import Select from 'react-select';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Button, AppBar, Toolbar, Container, Link, Grid, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
import useResponsive from '../../hooks/useResponsive';
// utils
import cssStyles from '../../utils/cssStyles';
// config
import { HEADER } from '../../config';
// components
import Logo from '../../components/Logo';
import Label from '../../components/Label';

//
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import navConfig from './MenuConfig';
import API from '../../Helper/api';
import Image from '../../components/Image';

// ----------------------------------------------------------------------

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: HEADER.MOBILE_HEIGHT,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up('md')]: {
    height: HEADER.MAIN_DESKTOP_HEIGHT,
  },
}));

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8,
}));

// ----------------------------------------------------------------------

export default function MainHeader() {
  const isOffset = useOffSetTop(HEADER.MAIN_DESKTOP_HEIGHT);

  const theme = useTheme();

  const { pathname } = useLocation();

  const isDesktop = useResponsive('up', 'md');

  const isHome = pathname === '/';

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [locations, setLocations] = React.useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    API.get('/api/WebsiteAPI/GetListOfLocations?APIKey=eJgDBiLVjroiksSVS8jLW5YXcHUAJOe5ZeOx80T9mzo=&CityCode=Hyd').then(
      (response) => {
        setLocations(response.data?.listOfLocations);
      }
    );
  }, []);

  const options = [
    { value: 'BoysHostel', label: 'Boys Hostel' },
    { value: 'GirlsHostel', label: 'Girls Hostel' },
  ];

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent' }}>
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            ...cssStyles(theme).bgBlur(),
            height: { md: HEADER.MAIN_DESKTOP_HEIGHT - 16 },
          }),
        }}
      >
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Logo />

          <Link href="" target="_blank" rel="noopener" underline="none">
            <Label color="info" sx={{ ml: 1 }}>
              Coliving
            </Label>
          </Link>

          <Box sx={{ flexGrow: 1 }} />

          {/* <m.div> */}
          {/* {isDesktop && (

          )} */}
          {!isHome && isDesktop && (
            <Box sx={{ width: '40%', marginRight: '3%' }}>
              <Grid
                container
                sx={{
                  borderRadius: '10px 0px 0px 10px',
                  // paddingLeft: '2%',
                  // position: 'relative',
                  // bottom: '65px',
                  // left: '200px',
                  // zIndex: '2000',
                }}
              >
                <Grid item xs={6} sx={{ border: 'none' }}>
                  <Select
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderRadius: '10px 0px 0px 10px',
                        padding: '10px',
                        fontSize: '14px',
                        fontWeight: '500',
                        color: "#000 !important"
                        // color: isSelected ? "#000" : "#000",
                      }),
                      option: (provided, state) => ({
                        ...provided,
                        color: "#000"
                      })
                    }}
                    placeholder={<div style={{ color: 'rgb(41, 45, 50)' }}>Choose Property </div>}
                    id="demo-simple-select"
                    label="choose property type"
                    inputProps={{ 'aria-label': 'Without label' }}
                    options={options}
                    sx={{borderRadius: '10px 0px 0px 10px', color: "#000"}}
                    components={{ DropdownIndicator: () => <ExpandMoreIcon />, IndicatorSeparator: () => null }}
                  />
                </Grid>
                <Grid item xs={6} sx={{ borderRadius: '0px 10px 10px 0px' }}>
                  <Select
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderRadius: '0px 10px 10px 0px',
                        padding: '10px',
                        fontSize: '14px',
                        fontWeight: '500',
                      }),
                      option: (provided, state) => ({
                        ...provided,
                        color: "#000"
                      })
                    }}
                    placeholder={
                      <div style={{ color: 'rgb(41, 45, 50)', fontWeight: '500' }}>Find in..</div>
                    }
                    options={locations.map((lt) => {
                      return {
                        value: lt.id,
                        label: lt.value,
                      };
                    })}
                    onChange={(data) => {
                      // handleModalClose();
                      navigate(`/contact-us/${data.value}/`);
                    }}
                    components={{
                      DropdownIndicator: () => (
                        <Image
                          src="images/search-interface-symbol.png"
                          alt=""
                          style={{ width: '15px', marginRight: '10px', color: "#000"}}
                        />
                      ),
                      IndicatorSeparator: () => null,
                    }}
                    onInputChange={(input) => {
                      if (input) {
                        setMenuIsOpen(true);
                      } else {
                        setMenuIsOpen(false);
                      }
                    }}
                    menuIsOpen={menuIsOpen}
                  />
                </Grid>
              </Grid>
            </Box>
          )}
          {/* </m.div> */}

          {isDesktop && <MenuDesktop isOffset={isOffset} isHome={isHome} navConfig={navConfig} />}

          {isDesktop && (
            <Button
              variant="contained"
              target="_blank"
              rel="noopener"
              href=""
            >
              <PhoneIcon /> &nbsp; Request A Callback
            </Button>
          )}

          {/* {!isDesktop && <MenuMobile isOffset={isOffset} isHome={isHome} navConfig={navConfig} />} */}
        </Container>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
