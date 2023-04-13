import PropTypes from 'prop-types';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import Modal from '@mui/material/Modal';
import { m } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { Navigate, NavLink as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import Select from 'react-select';

// @mui
import { styled } from '@mui/material/styles';
import {
  Box,
  Link,
  Grid,
  List,
  Stack,
  Popover,
  ListItem,
  ListSubheader,
  CardActionArea,
  FormControl,
  InputLabel,
  // Select,
  MenuItem,
  Typography,
  Card,
  InputAdornment,
  TextField,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import InputStyle from '../../components/InputStyle';
import API from '../../Helper/api';
// components
import Iconify from '../../components/Iconify';
import Image from '../../components/Image';
import { MapImag } from '../../sections/contact/MapImages';

// ----------------------------------------------------------------------

const LinkStyle = styled(Link)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.primary,
  marginRight: theme.spacing(5),
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shorter,
  }),
  '&:hover': {
    opacity: 0.48,
    textDecoration: 'none',
  },
}));

const TypoStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.primary,
  marginRight: theme.spacing(5),
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shorter,
  }),
  '&:hover': {
    opacity: 0.48,
    textDecoration: 'none',
  },
}));

const SubLinkStyle = styled((props) => (
  <ListItem sx={{ p: 0 }}>
    <Link rel="noopener" {...props}>
      {props.children}
    </Link>
  </ListItem>
))(({ theme }) => ({
  ...theme.typography.body2,
  display: 'flex',
  alignItems: 'center',
  marginTop: theme.spacing(3),
  color: theme.palette.text.secondary,
  transition: theme.transitions.create('color'),
  '&:hover': {
    color: theme.palette.text.primary,
  },
}));

// ----------------------------------------------------------------------

MenuDesktop.propTypes = {
  isHome: PropTypes.bool,
  isOffset: PropTypes.bool,
  navConfig: PropTypes.array,
};

export default function MenuDesktop({ isOffset, locations, isHome, navConfig }) {
  // const [locations, setLocation] = React.useState([]);

  // React.useEffect(() => {
  //   API.get('/api/WebsiteAPI/GetListOfLocations?APIKey=eJgDBiLVjroiksSVS8jLW5YXcHUAJOe5ZeOx80T9mzo=&CityCode=Hyd').then(
  //     (response) => {
  //       setLocation(response.data?.listOfLocations);
  //     }
  //   );
  // }, []);

  const { pathname } = useLocation();
  const [openModal, setOpenModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => {
    setShowModal(true);
  };

  useEffect(() => {
    if (open) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Stack direction="row">
        {navConfig.map((link) => (
          <MenuDesktopItem
            key={link.title}
            item={link}
            isOpen={open}
            onOpen={handleOpen}
            onClose={handleClose}
            isOffset={isOffset}
            isHome={isHome}
            handleModalShow={handleModalShow}
            handleModalClose={handleModalClose}
            showModal={showModal}
            locations={locations}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            menuIsOpen={menuIsOpen}
            setMenuIsOpen={setMenuIsOpen}
          />
        ))}
      </Stack>
    </>
  );
}

// ----------------------------------------------------------------------

MenuDesktopItem.propTypes = {
  isHome: PropTypes.bool,
  isOffset: PropTypes.bool,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  item: PropTypes.shape({
    path: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.array,
  }),
};

function MenuDesktopItem({
  item,
  isHome,
  isOpen,
  isOffset,
  onOpen,
  onClose,
  handleModalShow,
  handleModalClose,
  showModal,
  locations,
  selectedOption,
  setSelectedOption,
  menuIsOpen,
  setMenuIsOpen,
}) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { title, path, children } = item;

  const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  // const groupBadgeStyles: CSSProperties = {
  //   backgroundColor: '#EBECF0',
  //   borderRadius: '2em',
  //   color: '#172B4D',
  //   display: 'inline-block',
  //   fontSize: 12,
  //   fontWeight: 'normal',
  //   lineHeight: '1',
  //   minWidth: 1,
  //   padding: '0.16666666666667em 0.5em',
  //   textAlign: 'center',
  // };

  // const formatGroupLabel = (data: GroupedOption) => (
  //   <div style={groupStyles}>
  //     <span>{data.label}</span>
  //     <span style={groupBadgeStyles}>{data.options.length}</span>
  //   </div>
  // );

  const isActive = (path) => pathname === path;

  if (children) {
    return (
      <>
        <LinkStyle
          onClick={onOpen}
          sx={{
            display: 'flex',
            cursor: 'pointer',
            alignItems: 'center',
            ...(isHome && { color: title === 'Know More' ? 'black' : 'common.white' }),
            ...(isOffset && { color: 'text.primary' }),
            ...(isOpen && { opacity: 0.48 }),
          }}
        >
          {title}
          <Iconify
            icon={isOpen ? 'eva:arrow-ios-upward-fill' : 'eva:arrow-ios-downward-fill'}
            sx={{ ml: 0.5, width: 16, height: 16 }}
          />
        </LinkStyle>

        <Popover
          open={isOpen}
          anchorReference="anchorPosition"
          anchorPosition={{ top: 80, left: 0 }}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
          onClose={onClose}
          PaperProps={{
            sx: {
              px: 3,
              pt: 2,
              pb: 3,
              right: 5,
              m: 'auto',
              width: "15%",
              marginRight: "6%",
              borderRadius: 2,
              maxWidth: (theme) => theme.breakpoints.values.lg,
              boxShadow: (theme) => theme.customShadows.z24,
            },
          }}
        >
          <Grid container spacing={3}>
            {children.map((list) => {
              const { subheader, items } = list;

              return (
                <Grid key={subheader} item xs={12} lg={12} >
                  <List disablePadding>
                    {/* <ListSubheader
                      disableSticky
                      disableGutters
                      sx={{
                        display: 'flex',
                        lineHeight: 'unset',
                        alignItems: 'center',
                        color: 'text.primary',
                        typography: 'overline',
                      }}
                    >
                      <IconBullet type="subheader" /> {subheader}
                    </ListSubheader> */}

                    {items.map((item) => (
                      <SubLinkStyle
                        key={item.title}
                        href={item.path}
                        sx={{
                          ...(isActive(item.path) && {
                            color: 'text.primary',
                            typography: 'subtitle2',
                          }),
                        }}
                      >
                        {item.title === 'Dashboard' ? (
                          <CardActionArea
                            sx={{
                              py: 5,
                              px: 10,
                              borderRadius: 2,
                              color: 'primary.main',
                              bgcolor: 'background.neutral',
                              
                            }}
                          >
                            <Box
                              component={m.img}
                              whileTap="tap"
                              whileHover="hover"
                              variants={{
                                hover: { scale: 1.02 },
                                tap: { scale: 0.98 },
                              }}
                              src="/assets/illustrations/illustration_dashboard.png"
                            />
                          </CardActionArea>
                        ) : (
                          <>
                            <IconBullet />
                            {item.title}
                          </>
                        )}
                      </SubLinkStyle>
                    ))}
                  </List>
                </Grid>
              );
            })}
          </Grid>
        </Popover>
      </>
    );
  }

  if (title === 'Documentation') {
    return (
      <LinkStyle
        href={path}
        target="_blank"
        rel="noopener"
        sx={{
          ...(isHome && { color: 'common.white' }),
          ...(isOffset && { color: 'text.primary' }),
        }}
      >
        {title}
      </LinkStyle>
    );
  }

  return (
    <>
      {/* <LinkStyle
        onClick={handleModalShow}
        to={path}
        component={RouterLink}
        end={path === '/'}
        sx={{
          ...(isHome && { color: 'common.white' }),
          ...(isOffset && { color: 'text.primary' }),
          '&.active': {
            color: 'primary.main',
          },
        }}
      >
        {title}
      </LinkStyle> */}

      <TypoStyle
        onClick={handleModalShow}
        sx={{
          color: '#007B55',
          cursor: 'pointer',
          '&.active': {
            color: 'primary.main',
          },
        }}
      >
        {' '}
        {title}
      </TypoStyle>

      <Modal
        open={showModal}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card sx={{ width: '30%', marginTop: '2%', marginLeft: '40%', padding: '1%' }}>
          <Grid
            container
            sx={{
              borderRadius: '10px 0px 0px 10px',
            }}
          >
            <Grid item sx={{ width: '100%', marginTop: '8px' }}>
              <Select
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderRadius: '10px 10px 10px 10px',
                    padding: '7px',
                    fontSize: '14px',
                    fontWeight: '500',
                  }),
                }}
                placeholder={<div style={{ color: 'rgb(41, 45, 50)', fontWeight: '500' }}>Find in and around..</div>}
                options={locations?.map((lt) => {
                  return {
                    value: lt.id,
                    label: lt.value,
                  };
                })}
                onChange={(data) => {
                  handleModalClose();
                  navigate(`/search-property/${data.value}/`);
                }}
                components={{
                  DropdownIndicator: () => (
                    <Image src={MapImag.Search} alt="" style={{ width: '15px', marginRight: '10px' }} />
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

          <Grid container sx={{ marginTop: '3%' }}>
            <Grid item xs={12}>
              <h5 style={{ marginTop: '4%', marginBottom: '6px' }}>Popular Cities</h5>
            </Grid>
            <Grid item xs={12}>
              <Link href="/"  underline="none" style={{cursor: "pointer"}}>
              <img src={MapImag.Hyderabad} alt="" style={{ width: '60px', height: '60px', marginLeft: '10px' }} />
              <Typography sx={{ marginTop: '10px', color: "#000" }}>Hyderabad</Typography>
              </Link>
            </Grid>
          </Grid>
        </Card>
      </Modal>
    </>
  );
}

// ----------------------------------------------------------------------

IconBullet.propTypes = {
  type: PropTypes.oneOf(['item', 'subheader']),
};

function IconBullet({ type = 'item' }) {
  return (
    <Box sx={{ width: 24, height: 16, display: 'flex', alignItems: 'center' }}>
      <Box
        component="span"
        sx={{
          ml: '2px',
          width: 4,
          height: 4,
          borderRadius: '50%',
          bgcolor: 'currentColor',
          ...(type !== 'item' && { ml: 0, width: 8, height: 2, borderRadius: 2 }),
        }}
      />
    </Box>
  );
}
