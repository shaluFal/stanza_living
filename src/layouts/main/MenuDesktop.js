import PropTypes from 'prop-types';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import Modal from '@mui/material/Modal';
import { m } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { Navigate, NavLink as RouterLink, useLocation, useNavigate } from 'react-router-dom';

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
  Select,
  MenuItem,
  Typography,
  Card,
  InputAdornment,
  TextField,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import API from '../../Helper/api';
// components
import Iconify from '../../components/Iconify';

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

const SubLinkStyle = styled((props) => (
  <ListItem sx={{ p: 0 }}>
    <Link target="_blank" rel="noopener" {...props}>
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

export default function MenuDesktop({ isOffset, isHome, navConfig }) {
  const [locations, setLocation] = React.useState([]);

  React.useEffect(() => {
    API.get('/api/WebsiteAPI/GetListOfLocations?APIKey=eJgDBiLVjroiksSVS8jLW5YXcHUAJOe5ZeOx80T9mzo=&CityCode=Hyd').then(
      (response) => {
        setLocation(response.data?.listOfLocations);
      }
    );
  }, []);

  const { pathname } = useLocation();
  const [openModal, setOpenModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);
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
}) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { title, path, children } = item;

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
              pt: 5,
              pb: 3,
              right: 16,
              m: 'auto',
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
                <Grid key={subheader} item xs={12} md={subheader === 'Dashboard' ? 6 : 2}>
                  <List disablePadding>
                    <ListSubheader
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
                    </ListSubheader>

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
                              src="/stanza/assets/illustrations/illustration_dashboard.png"
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
      <LinkStyle
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
      </LinkStyle>

      {/* <Popover
        open={showModal}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 70, left: 0 }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={handleModalClose}
        PaperProps={{
          sx: {
            px: 3,
            pt: 2,
            pb: 2,
            right: -390,
            m: 'auto',
            borderRadius: 2,
            maxWidth: (theme) => theme.breakpoints.values.lg,
            boxShadow: (theme) => theme.customShadows.z24,
            width: '15%',
          },
        }}
      >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Choose Property Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="choose property type"
            onChange={(e) => {
              handleModalClose();
              navigate(`/contact-us/${e.target.value}/`);
            }}
          >
            {locations.map((lt) => {
              return <MenuItem value={lt.id}>{lt.value}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </Popover> */}

      <Modal
        open={showModal}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card
          sx={{ width: '30%', height: { lg: '25%', xs: '20%' }, marginTop: '2%', marginLeft: '40%', padding: '1%' }}
        >
          <Grid
            container
            sx={{
              borderRadius: '10px 0px 0px 10px',
            }}
          >
            <Grid item lg={6} xs={4}>
              <FormControl fullWidth>
                <InputLabel style={{ borderRadius: '10px 0px 0px 10px' }}>Choose property type</InputLabel>
                <Select
                  id="demo-simple-select"
                  label="choose property type"
                  // inputProps={{
                  //   borderRadius: "10px 0px 0px 10px"
                  // }}

                  onChange={(e) => {
                    handleModalClose();
                    navigate(`/contact-us/${e.target.value}/`);
                  }}
                  sx={{ background: 'white', borderRadius: '10px 0px 0px 10px' }}
                >
                  {locations.map((lt) => {
                    return <MenuItem value={lt.id}>{lt.value}</MenuItem>;
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item lg={6} xs={1} md={4} sx={{ borderRadius: '0px 10px 10px 0px' }}>
              <TextField
                inputProps={{ 'aria-label': 'Without label' }}
                variant="outlined"
                placeholder="Find in and around."
                sx={{
                  background: 'white',
                  borderRadius: '0px 10px 10px 0px',
                  width: { xs: '155px', lg: '200px', md: '200px' },
                }}
              />
            </Grid>
          </Grid>

          <h5 style={{ marginTop: '4%' }}>Popular Cities</h5>

          <Grid container sx={{ marginTop: '3%' }}>
            {locations.map((lt) => {
              return (
                <>
                  <Grid
                    item
                    xs={3}
                    md={3}
                    lg={3}
                    sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}
                    onClick={() => {
                      handleModalClose();
                      navigate(`/contact-us/${lt.id}/`);
                    }}
                  >
                    <LocationCityIcon sx={{ fontSize: '3rem', marginLeft: '8%' }} />
                    <Typography>{lt.value}</Typography>
                  </Grid>
                </>
              );
            })}
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
