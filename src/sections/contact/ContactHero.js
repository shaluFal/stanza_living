import { m } from 'framer-motion';
import React, { useCallback, useEffect, useState } from 'react';
import { styled, emphasize } from '@mui/material/styles';
import Popover from '@mui/material/Popover';
import Select from 'react-select';
import {
  Box,
  Container,
  Typography,
  Grid,
  InputAdornment,
  Card,
  Button,
  Divider,
  MenuItem,
  Breadcrumbs,
  TextField,
  // Select,
  InputLabel,
  FormControl,
  FormControlLabel,
  FormGroup,
  Checkbox,
  FormHelperText,
  Chip,
  Slider,
  TuneRounded,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import axios from 'axios';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import GoogleMapReact from 'google-map-react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import { _appFeatured } from '../../_mock';
import useResponsive from '../../hooks/useResponsive';
import { TextAnimate, MotionContainer, varFade } from '../../components/animate';
import InputStyle from '../../components/InputStyle';
import Iconify from '../../components/Iconify';
import API from '../../Helper/api';
import { AppFeatured } from '../@dashboard/general/app';
import SearchPropertyDetailPage from '../../pages/SearchPropertyDetailPage';
import Image from '../../components/Image';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    height: 560,
    padding: 0,
  },
  overflowY: 'scroll',
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    position: 'absolute',
    // bottom: theme.spacing(10),
  },
}));

const PrettoSlider = styled(Slider)({
  color: '#52af77',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '5px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#52af77',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

const filterStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

// ----------------------------------------------------------------------

export default function ContactHero() {
  const [location, setLocation] = React.useState([]);
  const [locations, setLocations] = React.useState([]);
  const navigate = useNavigate();
  console.log('locations', locations);
  React.useEffect(() => {
    API.get('/api/WebsiteAPI/GetListOfLocations?APIKey=eJgDBiLVjroiksSVS8jLW5YXcHUAJOe5ZeOx80T9mzo=&CityCode=Hyd').then(
      (response) => {
        setLocations(response.data?.listOfLocations);
      }
    );
  }, []);

  // -----

  const [budgetValue, setBudgetValue] = React.useState([0, 100]);
  const [budgetpopover, setBudgetpopover] = React.useState(null);
  const [occupancypopover, setOccupancypopover] = React.useState(null);
  const [genderpopover, setGenderpopover] = React.useState(null);
  const [amenitiespopover, setAmenitiespopover] = React.useState(null);
  const [popularitypopover, setPopularitypopover] = React.useState(null);

  const [openFilter, setOpenFilter] = React.useState(false);
  // -----

  const [openModal, setOpenModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const isDesktop = useResponsive('up', 'lg');
  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => {
    setShowModal(true);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const filterHandleOpen = () => setOpen(true);
  const filterHandleClose = () => setOpen(false);

  const handleChange = (event, newValue) => {
    setBudgetValue(newValue);
  };

  const handleBudgetClick = (event) => {
    setBudgetpopover(event.currentTarget);
  };

  const handleBudgetClose = () => {
    setBudgetpopover(null);
  };

  const occupancyHandleClick = (event) => {
    setOccupancypopover(event.currentTarget);
  };

  const occupancyHandleClose = () => {
    setOccupancypopover(null);
  };

  const genderHandleClick = (event) => {
    setGenderpopover(event.currentTarget);
  };

  const genderHandleClose = () => {
    setGenderpopover(null);
  };

  const handleClickAmenities = (event) => {
    setAmenitiespopover(event.currentTarget);
  };

  const handleCloseAmenities = () => {
    setAmenitiespopover(null);
  };

  const PopularityHandleClick = (event) => {
    setPopularitypopover(event.currentTarget);
  };

  const PopularityHandleClose = () => {
    setPopularitypopover(null);
  };

  const checkboxLabel = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const getAllLocations = useCallback(async () => {
    const locationid = window.location.pathname.split('/')[3];

    try {
      await API.post('http://pmsapis.crisprsys.net/api/WebsiteAPI/GetListOfProperties', {
        apiKey: 'eJgDBiLVjroiksSVS8jLW5YXcHUAJOe5ZeOx80T9mzo=',
        location: locationid,
        amenities: '',
        services: '',
        amountStartRange: '0',
        amountEndRange: '10000000',
      })
        .then((res) => {
          setLocation(res.data.listOfProperties);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getAllLocations();
  }, [getAllLocations]);

  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  const options = [
    { value: 'BoysHostel', label: 'Boys Hostel' },
    { value: 'GirlsHostel', label: 'Girls Hostel' },
  ];

  const localityOptions = [
    { value: 'Ameerpet', label: 'Ameerpet' },
    { value: 'Ameerpet', label: 'Ameerpet' },
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const openPopover = Boolean(anchorEl);
  const openBudgetPopover = Boolean(anchorEl);
  const id = openPopover ? 'simple-popover' : undefined;

  const openBudget = Boolean(budgetpopover);
  const budgetId = openBudget ? 'simple-popover' : undefined;

  const openOccupancy = Boolean(occupancypopover);
  const occupancyId = openOccupancy ? 'simple-popover' : undefined;

  const openGender = Boolean(genderpopover);
  const genderId = openGender ? 'simple-popover' : undefined;

  const openAmenities = Boolean(amenitiespopover);
  const amenitiesId = openAmenities ? 'simple-popover' : undefined;

  const openPopularity = Boolean(popularitypopover);
  const popularityId = openPopularity ? 'simple-popover' : undefined;

  const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor = theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[800];
    return {
      backgroundColor,
      height: theme.spacing(3),
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightRegular,
      '&:hover, &:focus': {
        backgroundColor: emphasize(backgroundColor, 0.06),
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(backgroundColor, 0.12),
      },
    };
  });

  function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }

  return (
    <>
      <Grid
        container
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Grid item md={8}>
          <m.div sx={{ paddingLeft: '2%' }}>
            <Typography sx={{ paddingLeft: '2%', marginBottom: '5px', fontWeight: '500' }}>
              Stanza Living/PG in Hyderabad
            </Typography>

            {isDesktop ? (
              <Grid container spacing={2} sx={{ paddingLeft: '2%' }}>
                <Grid item style={{}}>
                  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <div>
                      <Button
                        aria-describedby={id}
                        variant="outlined"
                        onClick={handlePopoverClick}
                        sx={{
                          color: 'rgb(41, 45, 50)',
                          fontWeight: '400',
                          borderRadius: '40px',
                          padding: '10px 20px',
                          margin: '5px',
                          border: '1px solid rgb(232, 232, 232)',
                          fontSize: "13px"
                        }}
                      >
                        Locality1 &nbsp;
                        {id !== 'simple-popover' ? <ExpandMoreIcon /> : <ExpandLessIcon />}
                      </Button>
                      <Popover
                        id={id}
                        open={openPopover}
                        anchorEl={anchorEl}
                        onClose={handlePopoverClose}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                        }}
                      >
                        <div style={{ maxHeight: '400px', maxWidth: '498px' }}>
                          <div style={{ padding: '20px' }}>
                            <p>Search bar</p>
                          </div>
                          <Typography sx={{ p: 2 }}>Select Range: </Typography>
                          {locations.map((item) => (
                            <StyledBreadcrumb
                              style={{ border: '1px solid grey', padding: '15px', margin: '10px' }}
                              component="a"
                              href="#"
                              label={item.value}
                            />
                          ))}
                          <hr />
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'end',
                              alignItems: 'center',
                              padding: '17px',
                            }}
                          >
                            <Button
                              style={{
                                textDecoration: 'underline',
                                fontWeight: '100',
                                color: 'black',
                                padding: '0px 40px',
                              }}
                            >
                              Clear
                            </Button>
                            <Button style={{ background: '#00AB55', color: 'white', padding: '10px 30px' }}>
                              Save
                            </Button>
                          </div>
                        </div>
                      </Popover>
                    </div>
                    {/* ------------------------------------------------------------------------ */}
                    <div>
                      {' '}
                      <Button
                        aria-describedby={id}
                        variant="outlined"
                        onClick={handleBudgetClick}
                        sx={{
                          color: 'rgb(41, 45, 50)',
                          fontWeight: '400',
                          borderRadius: '40px',
                          padding: '10px 20px',
                          margin: '5px',
                          border: '1px solid rgb(232, 232, 232)',
                          fontSize: "13px"
                        }}
                      >
                        Budget &nbsp;
                        <ExpandMoreIcon />
                      </Button>
                      <Popover
                        open={openBudget}
                        anchorEl={budgetpopover}
                        onClose={handleBudgetClose}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                        }}
                      >
                        <div style={{ maxHeight: '400px', maxWidth: '400px', padding: '10px 20px' }}>
                          <Typography sx={{ p: 2 }}>Select Range: </Typography>
                          <PrettoSlider
                            value={budgetValue}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            aria-label="pretto slider"
                          />
                          <div style={{ padding: '20px', display: 'flex', justifyContent: 'spaceBetween' }}>
                            <TextField
                              id="outlined-basic"
                              label="min price"
                              variant="outlined"
                              style={{ marginRight: '10px', maxWidth: '140px' }}
                            />
                            <span style={{ paddingTop: '15px' }}>-</span>
                            <TextField
                              id="outlined-basic"
                              label="max price"
                              variant="outlined"
                              style={{ marginLeft: '10px', maxWidth: '140px' }}
                            />
                          </div>
                          <hr />
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'end',
                              alignItems: 'center',
                              padding: '17px',
                            }}
                          >
                            <Button
                              style={{
                                textDecoration: 'underline',
                                fontWeight: '100',
                                color: 'black',
                                padding: '0px 40px',
                              }}
                            >
                              Clear
                            </Button>
                            <Button style={{ background: '#00AB55', color: 'white', padding: '10px 30px' }}>
                              Save
                            </Button>
                          </div>
                        </div>
                      </Popover>
                    </div>
                    {/* ------------------------------------------------------------------ */}
                    <div>
                      <Button
                        aria-describedby={occupancyId}
                        variant="outlined"
                        onClick={occupancyHandleClick}
                        sx={{
                          color: 'rgb(41, 45, 50)',
                          fontWeight: '400',
                          borderRadius: '40px',
                          padding: '10px 20px',
                          margin: '5px',
                          border: '1px solid rgb(232, 232, 232)',
                          fontSize: "13px"
                        }}
                      >
                        Occupancy &nbsp;
                        <ExpandMoreIcon />
                      </Button>
                      <Popover
                        id={id}
                        open={openOccupancy}
                        anchorEl={occupancypopover}
                        onClose={occupancyHandleClose}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                        }}
                      >
                        <div style={{ maxHeight: '400px', maxWidth: '3  00px' }}>
                          <Typography sx={{ p: 2 }}>Select Range: </Typography>
                          {locations.map((item) => (
                            <StyledBreadcrumb
                              style={{ border: '1px solid grey', padding: '15px', margin: '10px' }}
                              component="a"
                              href="#"
                              label={item.value}
                            />
                          ))}
                          <hr />
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'end',
                              alignItems: 'center',
                              padding: '17px',
                            }}
                          >
                            <Button
                              style={{
                                textDecoration: 'underline',
                                fontWeight: '100',
                                color: 'black',
                                padding: '0px 40px',
                              }}
                            >
                              Clear
                            </Button>
                            <Button style={{ background: '#00AB55', color: 'white', padding: '10px 30px' }}>
                              Save
                            </Button>
                          </div>
                        </div>
                      </Popover>
                    </div>

                    {/* --------------------------------------------- */}

                    <div>
                      <Button
                        aria-describedby={genderId}
                        variant="outlined"
                        onClick={genderHandleClick}
                        sx={{
                          color: 'rgb(41, 45, 50)',
                          fontWeight: '400',
                          borderRadius: '40px',
                          padding: '10px 20px',
                          margin: '5px',
                          border: '1px solid rgb(232, 232, 232)',
                          fontSize: "13px"
                        }}
                      >
                        Gender &nbsp;
                        <ExpandMoreIcon />
                      </Button>
                      <Popover
                        id={id}
                        open={openGender}
                        anchorEl={genderpopover}
                        onClose={genderHandleClose}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                        }}
                      >
                        <div style={{ maxHeight: '400px', maxWidth: '300px', padding: '10px 20px' }}>
                          <div style={{ marginBottom: '15px' }}>
                            <Checkbox {...checkboxLabel} />
                            Male
                            <Checkbox {...checkboxLabel} />
                            Female
                            <Checkbox {...checkboxLabel} />
                            unisex
                          </div>
                          <hr />
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'end',
                              alignItems: 'center',
                              padding: '15px 10px',
                            }}
                          >
                            <Button
                              style={{
                                textDecoration: 'underline',
                                fontWeight: '100',
                                color: 'black',
                                padding: '0px 40px',
                              }}
                            >
                              Clear
                            </Button>
                            <Button style={{ background: '#00AB55', color: 'white', padding: '10px 30px' }}>
                              Save
                            </Button>
                          </div>
                        </div>
                      </Popover>
                    </div>

                    {/* -------------------------------------- */}

                    <div>
                      <Button
                        aria-describedby={amenitiesId}
                        variant="outlined"
                        onClick={handleClickAmenities}
                        sx={{
                          color: 'rgb(41, 45, 50)',
                          fontWeight: '400',
                          borderRadius: '40px',
                          padding: '10px 20px',
                          margin: '5px',
                          border: '1px solid rgb(232, 232, 232)',
                          fontSize: "13px"
                        }}
                      >
                        Amenities &nbsp;
                        <ExpandMoreIcon />
                      </Button>
                      <Popover
                        id={id}
                        open={openAmenities}
                        anchorEl={amenitiespopover}
                        onClose={handleCloseAmenities}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                        }}
                      >
                        <div
                          style={{
                            maxHeight: '400px',
                            maxWidth: '500px',
                            padding: '10px 20px',
                          }}
                        >
                          <div style={{ marginBottom: '15px' }}>
                            <Checkbox {...checkboxLabel} />
                            Attatched Balcony
                            <Checkbox {...checkboxLabel} />
                            Air Conditioning
                            <Checkbox {...checkboxLabel} />
                            Attached Washroom
                            <Checkbox {...checkboxLabel} />
                            Spacious Cupboard
                            <Checkbox {...checkboxLabel} />
                            Storage Shelf
                            <Checkbox {...checkboxLabel} />
                            desert Cooler
                            <Checkbox {...checkboxLabel} />
                            Shared Washroom
                            <Checkbox {...checkboxLabel} />
                            Window
                          </div>
                          <hr />
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'end',
                              alignItems: 'center',
                              padding: '15px 10px',
                            }}
                          >
                            <Button
                              style={{
                                textDecoration: 'underline',
                                fontWeight: '100',
                                color: 'black',
                                padding: '0px 40px',
                              }}
                            >
                              Clear
                            </Button>
                            <Button style={{ background: '#00AB55', color: 'white', padding: '10px 30px' }}>
                              Save
                            </Button>
                          </div>
                        </div>
                      </Popover>
                    </div>

                    <span style={{ margin: '18px' }}> | </span>
                    <div>
                      <Button
                        variant="outlined"
                        sx={{
                          color: 'rgb(41, 45, 50)',
                          fontWeight: '400',
                          borderRadius: '40px',
                          padding: '10px 20px',
                          margin: '5px',
                          border: '1px solid rgb(232, 232, 232)',
                          fontSize: "13px"
                        }}
                        // onClick={filterHandleOpen}
                      >
                        My Wishlist
                      </Button>
                    </div>

                    <div>
                      <Button
                        variant="outlined"
                        sx={{
                          color: 'rgb(41, 45, 50)',
                          fontWeight: '400',
                          borderRadius: '40px',
                          padding: '10px 20px',
                          margin: '5px',
                          border: '1px solid rgb(232, 232, 232)',
                          fontSize: "13px"
                        }}
                        onClick={filterHandleOpen}
                      >
                        <TuneRoundedIcon />
                        &nbsp; More Filters
                      </Button>
                      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                          Filters
                        </BootstrapDialogTitle>
                        <hr />
                        <DialogContent dividers>
                          <Typography sx={{ p: 2 }}>Select Range: </Typography>
                          {locations.map((item) => (
                            <StyledBreadcrumb
                              style={{ border: '1px solid grey', padding: '15px', margin: '10px' }}
                              component="a"
                              href="#"
                              label={item.value}
                            />
                          ))}
                        </DialogContent>
                        <hr />
                        <DialogActions>
                          <Button
                            style={{
                              textDecoration: 'underline',
                              fontWeight: '100',
                              color: 'black',
                              padding: '0px 20px',
                            }}
                            autoFocus
                            onClick={handleClose}
                          >
                            Clear
                          </Button>
                          <Button
                            autoFocus
                            onClick={handleClose}
                            style={{ background: '#00AB55', color: 'white', padding: '15px' }}
                          >
                            Save
                          </Button>
                        </DialogActions>
                      </BootstrapDialog>
                    </div>

                    {/* ----------------------------------------------- */}

                    <div>
                      <Button
                        aria-describedby={popularityId}
                        variant="outlined"
                        onClick={PopularityHandleClick}
                        sx={{
                          fontWeight: '400',
                          borderRadius: '40px',
                          padding: '10px 20px',
                          margin: '5px',
                          border: '1px solid rgb(232, 232, 232)',
                          background: 'rgb(249, 249, 249)',
                          color: ' rgb(125, 125, 125)',
                          fontSize: "13px"
                        }}
                      >
                        Sort By <span style={{ color: '#00AB55', fontWeight: 'bold' }}> &nbsp; &nbsp;Popularity</span>{' '}
                        &nbsp;
                        <ExpandMoreIcon />
                      </Button>
                      <Popover
                        id={id}
                        open={openPopularity}
                        anchorEl={popularitypopover}
                        onClose={PopularityHandleClose}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                        }}
                      >
                        <div
                          style={{
                            maxHeight: '400px',
                            maxWidth: '300px',
                            padding: '10px 20px',
                          }}
                        >
                          <div style={{ marginBottom: '15px', display: 'grid' }}>
                            <Button>Price: Low to High</Button>
                            <Button>Price: High to Low</Button>
                            <Button>Sort By: Popularity</Button>
                          </div>
                          <hr />
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'end',
                              alignItems: 'center',
                              padding: '15px 10px',
                            }}
                          >
                            <Button
                              style={{
                                textDecoration: 'underline',
                                fontWeight: '100',
                                color: 'black',
                                padding: '0px 40px',
                              }}
                            >
                              Clear
                            </Button>
                            <Button style={{ background: '#00AB55', color: 'white', padding: '10px 30px' }}>
                              Save
                            </Button>
                          </div>
                        </div>
                      </Popover>
                    </div>
                  </div>
                </Grid>
              </Grid>
            ) : (
              <Grid container>
                <Grid item xs={3}>
                <div>
                      <Button
                        variant="outlined"
                        sx={{
                          color: 'rgb(41, 45, 50)',
                          fontWeight: '400',
                          borderRadius: '40px',
                          padding: '7px 12px',
                          margin: '5px',
                          border: '1px solid rgb(232, 232, 232)',
                          fontSize: "11px"
                        }}
                        // onClick={filterHandleOpen}
                      >
                        My Wishlist
                      </Button>
                    </div>
                </Grid>

                <Grid item xs={4}>
                <div>
                      <Button
                        variant="outlined"
                        sx={{
                          color: 'rgb(41, 45, 50)',
                          fontWeight: '400',
                          borderRadius: '40px',
                          padding: '5px 10px',
                          margin: '5px',
                          border: '1px solid rgb(232, 232, 232)',
                          fontSize: "10px"
                        }}
                        onClick={filterHandleOpen}
                      >
                        <TuneRoundedIcon />
                        &nbsp; More Filters
                      </Button>
                      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                          Filters
                        </BootstrapDialogTitle>
                        <hr />
                        <DialogContent dividers>
                          <Typography sx={{ p: 2 }}>Select Range: </Typography>
                          {locations.map((item) => (
                            <StyledBreadcrumb
                              style={{ border: '1px solid grey', padding: '15px', margin: '10px' }}
                              component="a"
                              href="#"
                              label={item.value}
                            />
                          ))}
                        </DialogContent>
                        <hr />
                        <DialogActions>
                          <Button
                            style={{
                              textDecoration: 'underline',
                              fontWeight: '100',
                              color: 'black',
                              padding: '0px 20px',
                            }}
                            autoFocus
                            onClick={handleClose}
                          >
                            Clear
                          </Button>
                          <Button
                            autoFocus
                            onClick={handleClose}
                            style={{ background: '#00AB55', color: 'white', padding: '15px' }}
                          >
                            Save
                          </Button>
                        </DialogActions>
                      </BootstrapDialog>
                    </div>
                </Grid>
                <Grid item xs={5}> 
                <div>
                      <Button
                        aria-describedby={popularityId}
                        variant="outlined"
                        onClick={PopularityHandleClick}
                        sx={{
                          fontWeight: '400',
                          borderRadius: '40px',
                          padding: '5px 10px',
                          margin: '5px',
                          border: '1px solid rgb(232, 232, 232)',
                          background: 'rgb(249, 249, 249)',
                          color: ' rgb(125, 125, 125)',
                          fontSize: "10px"
                        }}
                      >
                        Sort By Popularity
                      
                        <ExpandMoreIcon />
                      </Button>
                      <Popover
                        id={id}
                        open={openPopularity}
                        anchorEl={popularitypopover}
                        onClose={PopularityHandleClose}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                        }}
                      >
                        <div
                          style={{
                            maxHeight: '400px',
                            maxWidth: '300px',
                            padding: '10px 20px',
                          }}
                        >
                          <div style={{ marginBottom: '15px', display: 'grid' }}>
                            <Button>Price: Low to High</Button>
                            <Button>Price: High to Low</Button>
                            <Button>Sort By: Popularity</Button>
                          </div>
                          <hr />
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'end',
                              alignItems: 'center',
                              padding: '15px 10px',
                            }}
                          >
                            <Button
                              style={{
                                textDecoration: 'underline',
                                fontWeight: '100',
                                color: 'black',
                                padding: '0px 40px',
                              }}
                            >
                              Clear
                            </Button>
                            <Button style={{ background: '#00AB55', color: 'white', padding: '10px 30px' }}>
                              Save
                            </Button>
                          </div>
                        </div>
                      </Popover>
                    </div>
                </Grid>
              </Grid>
            )}

            {/* <h4 style={{marginTop: "2%", height: "100%"}}>&nbsp; | &nbsp;</h4> */}
          </m.div>

          <m.div>
            <Typography sx={{ marginTop: '2%', paddingLeft: '2%', fontWeight: '500' }}>
              Coliving/PG in Hyderabad
            </Typography>
          </m.div>
          <m.div>
            <Grid container spacing={2}>
              <Grid item md={8}>
                <Typography sx={{ marginTop: '2%', fontWeight: '700', marginBottom: '5%', paddingLeft: '2%' }}>
                  143 PGs waiting to be yours in Hyderabad
                </Typography>

                {location &&
                  location.map((loc) => {
                    return (
                      <div key={loc.facilityCode}>
                        <Card sx={{ padding: '3%', marginBottom: '4%', textDecoration: 'none' }}>
                          <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                              {/* {loc.listOfFacilityImages &&
                                  loc.listOfFacilityImages.map((fc, index) => {
                                    return (
                                      <div key={index}>
                                        <img src={fc.photoURL} alt="" style={{ width: '120%', height: '100%' }} />
                                      </div>
                                    );
                                  })} */}
                              {loc.listOfFacilityImages?.length > 0 ? (
                                <img
                                  src={loc.listOfFacilityImages[0]?.photoURL}
                                  alt=""
                                  style={{ width: '120%', height: '100%' }}
                                />
                              ) : (
                                <img src={''} alt="" style={{ width: '120%', height: '100%' }} />
                              )}
                            </Grid>
                            <Grid item xs={12} md={8}>
                              <Box>
                                <Typography variant="subtitle1">
                                  <Link
                                    to={`/search-property-detail/${loc.facilityCode}`}
                                    style={{ textDecoration: 'none', color: '#000' }}
                                  >
                                    {console.log(loc.facility)}
                                    {loc.facilityName}
                                  </Link>
                                </Typography>
                                <Typography>
                                  {/* {location.listOfLocations &&
                                          location.listOfLocations.map((loc) => {
                                            return <div key={loc.id}>{loc.value}</div>;
                                          })} */}
                                  {/* {loc.value} */}
                                </Typography>

                                <Grid container sx={{ marginTop: '2%', fontSize: '12px' }}>
                                  <Grid item xs={8} md={8} sx={{ display: 'flex' }}>
                                    {/* Unisex | Double, Triple */}
                                    {loc.listOfUnitTypes &&
                                      loc.listOfUnitTypes.map((typ) => {
                                        return <div key={typ.facilityCode}>{typ.unitType} &nbsp;</div>;
                                      })}
                                  </Grid>
                                  <Grid item xs={4} md={4}>
                                    <Typography sx={{ fontSize: '12px' }}>View Directions</Typography>
                                  </Grid>
                                </Grid>

                                <Grid container sx={{ marginTop: '2%' }} spacing={1}>
                                  <Grid item xs={12}>
                                    <Typography>Amenities: &nbsp; </Typography>
                                  </Grid>

                                  {loc.facilityAmenities?.length > 0 &&
                                    loc.facilityAmenities[0].amenityNames?.split(',').map((amn) => {
                                      return (
                                        <div key={amn.facilityCode}>
                                          <Grid item sx={{ marginRight: '10px', marginTop: '5px' }}>
                                            <Card
                                              sx={{
                                                borderRadius: '30px 30px',
                                                padding: '6px',
                                                border: '0.6px solid rgb(190, 190, 190)',
                                              }}
                                            >
                                              <Typography sx={{ fontSize: '12px' }}>{amn} </Typography>
                                            </Card>
                                          </Grid>
                                        </div>
                                      );
                                    })}
                                </Grid>

                                <Grid container spacing={1} sx={{ marginTop: '4%' }}>
                                  <Grid item xs={12} lg={4} md={12}>
                                    <Box sx={{ mb: 5 }}>
                                      <Typography variant="subtitle1">Starts from</Typography>
                                      <Typography>Rs {loc.rentMonthly}/mo*</Typography>
                                    </Box>
                                  </Grid>
                                  <Grid item xs={6} lg={4} md={6}>
                                    <Box>
                                      <Button
                                        variant="contained"
                                        target="_blank"
                                        rel="noopener"
                                        href=""
                                        style={{ fontSize: '12px', padding: '10px' }}
                                      >
                                        Schedule a visit
                                      </Button>
                                    </Box>
                                  </Grid>
                                  <Grid item xs={6} lg={4} md={6}>
                                    <Box>
                                      <Button
                                        variant="contained"
                                        target="_blank"
                                        rel="noopener"
                                        href=""
                                        style={{ fontSize: '12px', padding: '10px' }}
                                      >
                                        Unlock discount
                                      </Button>
                                    </Box>
                                  </Grid>
                                </Grid>
                              </Box>
                            </Grid>
                          </Grid>
                        </Card>
                      </div>
                    );
                  })}
              </Grid>
              <Grid item md={4} style={{ height: '100vh', width: '100%', marginTop: '6.5%' }}>
                <GoogleMapReact
                  bootstrapURLKeys={{ key: '' }}
                  defaultCenter={defaultProps.center}
                  defaultZoom={defaultProps.zoom}
                >
                  <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
                </GoogleMapReact>
              </Grid>
            </Grid>
          </m.div>
        </Grid>
      </Grid>
    </>
  );
}
