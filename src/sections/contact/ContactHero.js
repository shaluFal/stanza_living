import { m } from 'framer-motion';
import React, { useCallback, useEffect, useState } from 'react';
import { styled, emphasize } from '@mui/material/styles';
import Popover from '@mui/material/Popover';
import Select from 'react-select';
import './custom.css';
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
  Modal,
  Radio,
  RadioGroup,
  // Select,
  Alert,
  AlertTitle,
  Stack,
} from '@mui/material';
import { Col, FormLabel, Row } from 'react-bootstrap';
import axios from 'axios';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KingBedOutlinedIcon from '@mui/icons-material/KingBedOutlined';
import CallIcon from '@mui/icons-material/Call';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DirectionsOutlinedIcon from '@mui/icons-material/DirectionsOutlined';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import GoogleMapReact from 'google-map-react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import _ from 'lodash';
import AppCarousel from '../@dashboard/general/app/AppCarousel';
import { _appFeatured } from '../../_mock';
import useResponsive from '../../hooks/useResponsive';
import { TextAnimate, MotionContainer, varFade } from '../../components/animate';
import InputStyle from '../../components/InputStyle';
import Iconify from '../../components/Iconify';
import API from '../../Helper/api';
import { AppFeatured } from '../@dashboard/general/app';
import SearchPropertyDetailPage from '../../pages/SearchPropertyDetailPage';
import Image from '../../components/Image';
import { lcsData, pcsData } from './data';
import GoogleMap from './GoogleMap';

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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  borderRadius: '10px 10px',
  boxShadow: 24,
  p: 4,
};

const stylePic = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: 350, md: 900 },
  bgcolor: 'background.paper',
  borderRadius: '10px 10px',
  border: 'none',
  boxShadow: 24,
  p: 2,
};

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

// ------------------------------------------------------------------

export default function ContactHero() {
  const [location, setLocation] = React.useState([]);
  const [locations, setLocations] = React.useState([]);
  const [propertyName, setPropertyName] = React.useState('');
  const [propertyData, setPropertyData] = React.useState([]);
  const [allData, setAllData] = React.useState([]);
  const [filter, setFilter] = React.useState({});
  const [filterTypes, setFilterTypes] = React.useState([]);
  const [srcLoc, setSrcLoc] = React.useState('');
  const [budMaxValue, setBudMaxValue] = React.useState(60000);
  const [selctedPropertyName, setSelctedPropertyName] = React.useState('');

  const navigate = useNavigate();

  React.useEffect(() => {
    API.get('/api/WebsiteAPI/GetListOfLocations?APIKey=eJgDBiLVjroiksSVS8jLW5YXcHUAJOe5ZeOx80T9mzo=&CityCode=Hyd')
      .then((response) => {
        setLocations(response.data?.listOfLocations);
        setLocation(response.data?.listOfLocations);
        const locationid = window.location.pathname.split('/')[2];
        for (let i = 0; i < response.data?.listOfLocations?.length; i += 1) {
          if (response.data?.listOfLocations[i]?.id === locationid) {
            setSelctedPropertyName(response.data?.listOfLocations[i]?.value);
            break;
          }
        }
        // setLocations(lcsData);
        // setLocation(lcsData);
        // setPropertyData(pcsData);
        // setAllData(pcsData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [locationid, setLocationId] = useState();
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openPic, setPic] = useState(false);
  const handleOpenPic = () => setPic(true);
  const handleClosePic = () => setPic(false);

  const [openModal, setOpenModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const isDesktop = useResponsive('up', 'md');
  const checkboxLabel = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  const getAllLocations = useCallback(async () => {
    const locationid = window.location.pathname.split('/')[2];

    try {
      await API.post('/api/WebsiteAPI/GetListOfProperties', {
        apiKey: 'eJgDBiLVjroiksSVS8jLW5YXcHUAJOe5ZeOx80T9mzo=',
        location: locationid,
        amenities: '',
        services: '',
        amountStartRange: '0',
        amountEndRange: '10000000',
        gender: '',
        occupancy: '',
      })
        .then((res) => {
          setPropertyData(res.data.listOfProperties);
          setAllData(res.data.listOfProperties);

          const data = res.data.listOfProperties;

          if (data.length > 0) {
            let bb = data.map((b) => b.rentMonthly);
            bb = _.sortBy(bb).reverse();
            setBudMaxValue(Number(bb[0]));
          }
          setLoaded(true);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getAllLocations();
    const locationid = window.location.pathname.split('/')[2];
    // console.log('rrrrrrrrrr', locationid);
  }, [getAllLocations, locationid]);

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

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openPopover = Boolean(anchorEl);
  const id = openPopover ? 'simple-popover' : undefined;

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

  const handleFilterTypes = (event, type) => {
    if (filterTypes?.includes(type)) {
      const fts = filterTypes.filter((vt) => vt !== type);
      setFilterTypes(fts);
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
      setFilterTypes([...filterTypes, type]);
    }
  };

  const handleFilter = (type, value, event) => {
    const currentFilter = { ...filter };
    switch (type) {
      case 'Locality': {
        if (!currentFilter[type])
          currentFilter[type] = {
            locations: [],
            values: [],
          };

        let locations_ = currentFilter[type].locations;
        let values_ = currentFilter[type].values;

        if (values_?.includes(value?.id)) {
          values_ = values_.filter((vt) => vt !== value?.id);
          locations_ = locations_.filter((vt) => vt !== value?.value);
        } else {
          values_ = [...values_, value.id];
          locations_ = [...locations_, value.value];
        }

        if (values_ && values_?.length > 0) {
          currentFilter[type].locations = locations_;
          currentFilter[type].values = values_;
        }

        setFilter(currentFilter);

        // if (values_?.length <= 0) handleClearFilter(event, type);

        break;
      }

      case 'Budget': {
        if (!currentFilter[type]) currentFilter[type] = [0, 60000];

        currentFilter[type] = value;
        setFilter(currentFilter);
        break;
      }

      case 'Occupancy': {
        if (!currentFilter[type]) currentFilter[type] = 'Single Occupancy';

        currentFilter[type] = value;
        setFilter(currentFilter);
        break;
      }

      case 'Gender': {
        // if (!currentFilter[type]) currentFilter[type] = 'Male';

        if (currentFilter[type] === value) {
          currentFilter[type] = null;
        } else currentFilter[type] = value;

        setFilter(currentFilter);
        break;
      }

      case 'Amenities': {
        if (!currentFilter[type]) currentFilter[type] = [];

        if (currentFilter[type]?.includes(value))
          currentFilter[type] = currentFilter[type].filter((vt) => vt !== value);
        else currentFilter[type] = [...currentFilter[type], value];

        setFilter(currentFilter);

        // if (currentFilter[type]?.length <= 0) handleClearFilter(event, type);

        break;
      }

      default:
        break;
    }
  };

  const handleClearFilter = (e, type) => {
    setAnchorEl(null);
    const currentFilter = { ...filter };
    currentFilter[type] = null;
    setFilter(currentFilter);
    handleFilterTypes(e, type);
    handleFilterData(currentFilter, e, type);

    if (type === 'Locality') setPropertyData([...allData]);
  };

  const handleFilterData = (ff, e, type) => {
    let data = [...allData];

    let filterOpt = { ...filter };

    if (ff) filterOpt = { ...ff };

    Object.keys(filterOpt).forEach((key) => {
      if (filterOpt[key]) {
        switch (key) {
          case 'Locality': {
            const values = filterOpt[key].values;

            if (values.length > 0) {
              data = [];
              let dd = 0;
              values.forEach(async (tid, index) => {
                await API.post('/api/WebsiteAPI/GetListOfProperties', {
                  apiKey: 'eJgDBiLVjroiksSVS8jLW5YXcHUAJOe5ZeOx80T9mzo=',
                  location: tid,
                  amenities: '',
                  services: '',
                  amountStartRange: '0',
                  amountEndRange: '10000000',
                })
                  .then((res) => {
                    data = [...data, ...res.data.listOfProperties];
                    dd += 1;

                    if (dd === values.length) setPropertyData(data);
                  })
                  .catch((err) => {
                    dd += 1;
                    console.log(err);
                  });
              });
            } else {
              // setPropertyData([]);
              // // setPropertyData([...allData]);
              handleClearFilter(e, type);
            }

            break;
          }

          case 'Budget': {
            if (filterOpt[key]) {
              data = data.filter(
                (dt) =>
                  Number(dt.rentMonthly) >= Number(filterOpt[key][0]) &&
                  Number(dt.rentMonthly) <= Number(filterOpt[key][1])
              );
            }
            break;
          }

          case 'Occupancy': {
            if (filterOpt[key]) {
              data = data.filter((dt) => {
                if (dt.listOfUnitTypes?.length <= 0) return true;

                const units = dt.listOfUnitTypes.map((ut) => ut.unitType);

                if (units.includes(filterOpt[key])) return true;

                return false;
              });
            }
            break;
          }

          case 'Gender': {
            if (filterOpt[key]) {
              data = data.filter((dt) => dt.gender === filterOpt[key]);
            }
            break;
          }

          case 'Amenities': {
            if (filterOpt[key]?.length > 0) {
              data = data.filter((dt) => {
                if (dt.facilityAmenities?.length <= 0) return true;

                const names = dt.facilityAmenities[0]?.amenityNames?.split(',');

                // console.log('rrrrrrrrrrrrrrrr', names, filterOpt[key]);
                let flag = true;

                filterOpt[key].forEach((ft) => {
                  if (!names.includes(ft)) flag = false;
                });

                return flag;
              });
            } else handleClearFilter(e, type);

            break;
          }

          default:
            break;
        }
      }
    });

    setPropertyData(data);
    setAnchorEl(null);
    handleFilterTypes(e, type);
  };

  return (
    <>
      <Grid
        container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '10px',
        }}
      >
        <Grid item md={11}>
          <m.div sx={{ paddingLeft: '2%' }}>
            <Typography sx={{ paddingLeft: '2%', marginBottom: '5px', fontWeight: '500' }}>
              Coliving / <span style={{ color: 'grey' }}>PG in Hyderabad</span>
            </Typography>

            {isDesktop ? (
              <Grid container spacing={2} sx={{ paddingLeft: '2%' }}>
                <Grid item>
                  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <div>
                      <Button
                        aria-describedby={id}
                        variant="outlined"
                        onClick={(e) => handleFilterTypes(e, 'Locality')}
                        sx={{
                          color: 'rgb(41, 45, 50)',
                          fontWeight: '400',
                          borderRadius: '40px',
                          padding: '14px 30px',
                          margin: '5px',
                          border: '1px solid rgb(232, 232, 232)',
                          fontSize: '14px',
                        }}
                      >
                        Locality &nbsp;
                        {!filterTypes?.includes('Locality') ? <ExpandMoreIcon /> : <ExpandLessIcon />}
                      </Button>
                      <Popover
                        id={id}
                        open={filterTypes?.includes('Locality')}
                        anchorEl={anchorEl}
                        onClose={(e) => handleFilterTypes(e, 'Locality')}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                        }}
                      >
                        <div style={{ maxHeight: '400px', maxWidth: '498px' }}>
                          <div style={{ padding: '20px' }}>
                            <FormControl
                              style={{
                                width: '100%',
                                height: '50px',
                                background: 'rgb(255, 255, 255)',
                                borderRadius: '10px',
                                appearance: 'none',
                                outline: 'none',
                                fontFamily: 'Font-Light',
                                fontSize: '14px',
                              }}
                            >
                              <TextField
                                size="small"
                                variant="outlined"
                                value={srcLoc}
                                onChange={(e) => {
                                  setSrcLoc(e.target.value ? e.target.value : '');
                                }}
                                placeholder="Search for your second home"
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <SearchIcon />
                                    </InputAdornment>
                                  ),
                                }}
                              />
                            </FormControl>
                          </div>
                          {locations
                            ?.filter((ft) => String(ft.value).toLowerCase()?.includes(String(srcLoc).toLowerCase()))
                            .map((item, index) => (
                              // <div key={index}>
                              <Link to={`/search-property/${item.id}/`}>
                                <StyledBreadcrumb
                                  style={{
                                    border: '1px solid grey',
                                    padding: '15px',
                                    margin: '10px',
                                    background: filter?.Locality?.values?.includes(item.id) ? 'red' : 'white',
                                    cursor: 'pointer',
                                  }}
                                  component="a"
                                  href="#"
                                  label={item.value}
                                  // onClick={() => handleFilter('Locality', item)}
                                />
                              </Link>
                              // </div>
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
                              onClick={(e) => handleClearFilter(e, 'Locality')}
                            >
                              Clear
                            </Button>
                            <Button
                              style={{ background: '#00AB55', color: 'white', padding: '10px 30px' }}
                              onClick={(e) => handleFilterData(null, e, 'Locality')}
                            >
                              Save
                            </Button>
                          </div>
                        </div>
                      </Popover>
                    </div>
                    {/* -------------------------------Budget Filter----------------------------------------- */}
                    <div>
                      {' '}
                      <Button
                        aria-describedby={id}
                        variant="outlined"
                        onClick={(e) => handleFilterTypes(e, 'Budget')}
                        sx={{
                          color: 'rgb(41, 45, 50)',
                          fontWeight: '400',
                          borderRadius: '40px',
                          padding: '14px 30px',
                          margin: '5px',
                          border: '1px solid rgb(232, 232, 232)',
                          fontSize: '14px',
                        }}
                      >
                        Budget &nbsp;
                        <ExpandMoreIcon />
                      </Button>
                      <Popover
                        open={filterTypes?.includes('Budget')}
                        anchorEl={anchorEl}
                        onClose={(e) => handleFilterTypes(e, 'Budget')}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                        }}
                      >
                        <div style={{ maxHeight: '400px', maxWidth: '400px', padding: '10px 20px' }}>
                          <Typography sx={{ p: 2 }}>Select Range: </Typography>
                          <PrettoSlider
                            value={filter?.Budget || [0, 60000]}
                            onChange={(e, value) => handleFilter('Budget', value, e)}
                            aria-label="pretto slider"
                            min={0}
                            max={budMaxValue || 60000}
                          />
                          <div style={{ padding: '20px', display: 'flex', justifyContent: 'spaceBetween' }}>
                            <TextField
                              id="outlined-basic"
                              label="min price"
                              variant="outlined"
                              value={filter?.Budget ? filter?.Budget[0] : 0}
                              onChange={(e) =>
                                handleFilter(
                                  'Budget',
                                  [e.target.value, filter?.Budget ? filter?.Budget[1] : budMaxValue],
                                  e
                                )
                              }
                              style={{ marginRight: '10px', maxWidth: '140px' }}
                            />
                            <span style={{ paddingTop: '15px' }}>-</span>
                            <TextField
                              id="outlined-basic"
                              label="max price"
                              value={filter?.Budget ? filter?.Budget[1] : budMaxValue}
                              onChange={(e) =>
                                handleFilter('Budget', [filter?.Budget ? filter?.Budget[0] : 0, e.target.value], e)
                              }
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
                              onClick={(e) => handleClearFilter(e, 'Budget')}
                            >
                              Clear
                            </Button>
                            <Button
                              style={{ background: '#00AB55', color: 'white', padding: '10px 30px' }}
                              onClick={(e) => handleFilterData(null, e, 'Budget')}
                            >
                              Save
                            </Button>
                          </div>
                        </div>
                      </Popover>
                    </div>
                    {/* --------------------------------Occupancy Filter---------------------------------- */}
                    <div>
                      <Button
                        aria-describedby={id}
                        variant="outlined"
                        onClick={(e) => handleFilterTypes(e, 'Occupancy')}
                        sx={{
                          color: 'rgb(41, 45, 50)',
                          fontWeight: '400',
                          borderRadius: '40px',
                          padding: '14px 30px',
                          margin: '5px',
                          border: '1px solid rgb(232, 232, 232)',
                          fontSize: '14px',
                        }}
                      >
                        Occupancy &nbsp;
                        <ExpandMoreIcon />
                      </Button>
                      <Popover
                        id={id}
                        open={filterTypes?.includes('Occupancy')}
                        anchorEl={anchorEl}
                        onClose={(e) => handleFilterTypes(e, 'Occupancy')}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                        }}
                      >
                        <div style={{ maxHeight: '400px', maxWidth: '300px' }}>
                          {[
                            {
                              label: 'Single Occupancy',
                              value: 'Single Occupancy',
                            },
                            {
                              label: 'Double Occupancy',
                              value: 'Double Occupancy',
                            },
                          ]?.map((item, index) => (
                            <div key={index}>
                              <StyledBreadcrumb
                                style={{
                                  border: '1px solid grey',
                                  padding: '15px',
                                  margin: '10px',
                                  background: filter?.Occupancy === item.label ? 'red' : 'white',
                                }}
                                component="a"
                                href="#"
                                label={item.value}
                                onClick={() => handleFilter('Occupancy', item.label)}
                              />
                            </div>
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
                              onClick={(e) => handleClearFilter(e, 'Occupancy')}
                            >
                              Clear
                            </Button>
                            <Button
                              style={{ background: '#00AB55', color: 'white', padding: '10px 30px' }}
                              onClick={(e) => handleFilterData(null, e, 'Occupancy')}
                            >
                              Save
                            </Button>
                          </div>
                        </div>
                      </Popover>
                    </div>

                    {/* --------------------------------------------- */}

                    <div>
                      <Button
                        aria-describedby={id}
                        variant="outlined"
                        onClick={(e) => handleFilterTypes(e, 'Gender')}
                        sx={{
                          color: 'rgb(41, 45, 50)',
                          fontWeight: '400',
                          borderRadius: '40px',
                          padding: '14px 30px',
                          margin: '5px',
                          border: '1px solid rgb(232, 232, 232)',
                          fontSize: '14px',
                        }}
                      >
                        Gender &nbsp;
                        <ExpandMoreIcon />
                      </Button>
                      <Popover
                        id={id}
                        open={filterTypes?.includes('Gender')}
                        anchorEl={anchorEl}
                        onClose={(e) => handleFilterTypes(e, 'Gender')}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                        }}
                      >
                        <div style={{ maxHeight: '400px', maxWidth: '300px', padding: '10px 20px' }}>
                          <div style={{ marginBottom: '15px' }}>
                            <div>
                              <Checkbox
                                checked={filter.Gender === 'Male'}
                                onClick={(e) => handleFilter('Gender', 'Male')}
                                {...checkboxLabel}
                              />
                              Male
                            </div>
                            <div>
                              <Checkbox
                                checked={filter.Gender === 'Female'}
                                onClick={(e) => handleFilter('Gender', 'Female')}
                                {...checkboxLabel}
                              />
                              Female
                            </div>
                            <div>
                              <Checkbox
                                checked={filter.Gender === 'Unisex'}
                                onClick={(e) => handleFilter('Gender', 'Unisex')}
                                {...checkboxLabel}
                              />
                              Unisex
                            </div>
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
                              onClick={(e) => handleClearFilter(e, 'Gender')}
                            >
                              Clear
                            </Button>
                            <Button
                              style={{ background: '#00AB55', color: 'white', padding: '10px 30px' }}
                              onClick={(e) => handleFilterData(null, e, 'Gender')}
                            >
                              Save
                            </Button>
                          </div>
                        </div>
                      </Popover>
                    </div>

                    <div>
                      <Button
                        aria-describedby={id}
                        variant="outlined"
                        onClick={(e) => handleFilterTypes(e, 'Amenities')}
                        sx={{
                          color: 'rgb(41, 45, 50)',
                          fontWeight: '400',
                          borderRadius: '40px',
                          padding: '14px 30px',
                          margin: '5px',
                          border: '1px solid rgb(232, 232, 232)',
                          fontSize: '14px',
                        }}
                      >
                        Amenities &nbsp;
                        <ExpandMoreIcon />
                      </Button>
                      <Popover
                        id={id}
                        open={filterTypes?.includes('Amenities')}
                        anchorEl={anchorEl}
                        onClose={(e) => handleFilterTypes(e, 'Amenities')}
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
                          <div style={{ marginBottom: '15px', display:"flex" }}>
                            <div>
                              <div className="d-flex gap-3">
                                <Checkbox
                                  checked={filter.Amenities?.includes('Attached Balcony')}
                                  onClick={(e) => handleFilter('Amenities', 'Attached Balcony', e)}
                                  {...checkboxLabel}
                                />
                                Attached Balcony
                              </div>
                              <div>
                                <Checkbox
                                  checked={filter.Amenities?.includes('Air Conditioning')}
                                  onClick={(e) => handleFilter('Amenities', 'Air Conditioning', e)}
                                  {...checkboxLabel}
                                />
                                Air Conditioning
                              </div>
                              <div className="d-flex gap-3">
                                <Checkbox
                                  checked={filter.Amenities?.includes('Attached Washroom')}
                                  onClick={(e) => handleFilter('Amenities', 'Attached Washroom', e)}
                                  {...checkboxLabel}
                                />
                                Attached Washroom
                              </div>
                              <div>
                                <Checkbox
                                  checked={filter.Amenities?.includes('Spacious Cupboard')}
                                  onClick={(e) => handleFilter('Amenities', 'Spacious Cupboard', e)}
                                  {...checkboxLabel}
                                />
                                Spacious Cupboard
                              </div>
                              <div className="d-flex gap-3">
                                <Checkbox
                                  checked={filter.Amenities?.includes('Storage Shelf')}
                                  onClick={(e) => handleFilter('Amenities', 'Storage Shelf', e)}
                                  {...checkboxLabel}
                                />
                                Storage Shelf
                              </div>
                            </div>
                            <div>
                              <div>
                                <Checkbox
                                  checked={filter.Amenities?.includes('Desert Cooler')}
                                  onClick={(e) => handleFilter('Amenities', 'Desert Cooler', e)}
                                  {...checkboxLabel}
                                />
                                Desert Cooler
                              </div>
                              <div className="d-flex gap-3">
                                <Checkbox
                                  checked={filter.Amenities?.includes('Shared Washroom')}
                                  onClick={(e) => handleFilter('Amenities', 'Shared Washroom', e)}
                                  {...checkboxLabel}
                                />
                                Shared Washroom
                              </div>
                              <div>
                                <Checkbox
                                  checked={filter.Amenities?.includes('Window')}
                                  onClick={(e) => handleFilter('Amenities', 'Window', e)}
                                  {...checkboxLabel}
                                />
                                Window
                              </div>
                              <div className="d-flex gap-3">
                                <Checkbox
                                  checked={filter.Amenities?.includes('Lift Facility')}
                                  onClick={(e) => handleFilter('Amenities', 'Lift Facility', e)}
                                  {...checkboxLabel}
                                />
                                Lift Facility
                              </div>
                              <div>
                                <Checkbox
                                  checked={filter.Amenities?.includes('Parking')}
                                  onClick={(e) => handleFilter('Amenities', 'Parking', e)}
                                  {...checkboxLabel}
                                />
                                Parking
                              </div>
                            </div>
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
                              onClick={(e) => handleClearFilter(e, 'Amenities')}
                            >
                              Clear
                            </Button>
                            <Button
                              style={{ background: '#00AB55', color: 'white', padding: '10px 30px' }}
                              onClick={(e) => handleFilterData(null, e, 'Amenities')}
                            >
                              Apply
                            </Button>
                          </div>
                        </div>
                      </Popover>
                    </div>

                    <span style={{ margin: '20px' }}> | </span>

                    <div>
                      <Button
                        aria-describedby={id}
                        variant="outlined"
                        onClick={(e) => handleFilterTypes(e, 'Popularity')}
                        sx={{
                          fontWeight: '400',
                          borderRadius: '40px',
                          padding: '14px 30px',
                          margin: '5px',
                          border: '0px',
                          background: 'rgb(249, 249, 249)',
                          color: ' rgb(125, 125, 125)',
                          fontSize: '14px',
                        }}
                      >
                        Sort By
                        {/* <span style={{ color: '#00AB55', fontWeight: 'bold' }}> &nbsp; &nbsp;Popularity</span>{' '} */}
                        &nbsp;
                        <ExpandMoreIcon />
                      </Button>
                      <Popover
                        id={id}
                        open={filterTypes?.includes('Popularity')}
                        anchorEl={anchorEl}
                        onClose={(e) => handleFilterTypes(e, 'Popularity')}
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
                            <Button
                              onClick={(e) => {
                                let dd = [...propertyData];
                                dd = _.sortBy(dd, 'rentMonthly');

                                setPropertyData(dd);
                                handleFilterTypes(e, 'Popularity');
                              }}
                            >
                              Price: Low to High
                            </Button>
                            <Button
                              onClick={(e) => {
                                let dd = [...propertyData];
                                dd = _.sortBy(dd, 'rentMonthly').reverse();
                                setPropertyData(dd);
                                handleFilterTypes(e, 'Popularity');
                              }}
                            >
                              Price: High to Low
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
                <Grid item xs={5}>
                  <div>
                    <Button
                      aria-describedby={id}
                      variant="outlined"
                      onClick={(e) => handleFilterTypes(e, 'Popularity')}
                      sx={{
                        fontWeight: '400',
                        borderRadius: '40px',
                        padding: '5px 10px',
                        margin: '5px',
                        border: '1px solid rgb(232, 232, 232)',
                        background: 'rgb(249, 249, 249)',
                        color: ' rgb(125, 125, 125)',
                        fontSize: '10px',
                      }}
                    >
                      Sort By
                      <ExpandMoreIcon />
                    </Button>
                    <Popover
                      id={id}
                      open={filterTypes.includes('Popularity')}
                      anchorEl={anchorEl}
                      onClose={(e) => handleFilterTypes(e, 'Popularity')}
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
                          <Button
                            onClick={() => {
                              let dd = [...propertyData];
                              dd = _.sortBy(dd, 'rentMonthly');

                              setPropertyData(dd);
                            }}
                          >
                            Price: Low to High
                          </Button>
                          <Button
                            onClick={() => {
                              let dd = [...propertyData];
                              dd = _.sortBy(dd, 'rentMonthly').reverse();
                              setPropertyData(dd);
                            }}
                          >
                            Price: High to Low
                          </Button>
                        </div>
                      </div>
                    </Popover>
                  </div>
                </Grid>
              </Grid>
            )}
          </m.div>

          <m.div>
            <Grid container spacing={2}>
              <Grid item md={8}>
                <Typography
                  sx={{ marginTop: '2%', fontWeight: '700', marginBottom: '2%', paddingLeft: '2%', fontSize: '20px' }}
                >
                  {propertyData?.length} PGs waiting to be yours in {selctedPropertyName}, Hyderabad
                </Typography>

                <Grid
                  container
                  sx={{
                    borderRadius: '10px 0px 0px 10px',
                  }}
                >
                  <Grid item sx={{ width: '40%', marginTop: '4px', marginBottom: '15px' }}>
                    <TextField
                      id="propertyname"
                      placeholder="Search with name..."
                      variant="outlined"
                      sx={{ marginLeft: '5%' }}
                      value={propertyName}
                      onChange={(e) => setPropertyName(e.target.value)}
                    />
                  </Grid>
                </Grid>

                {propertyData && propertyData?.length > 0 ? (
                  propertyData
                    .filter((pp) => String(pp.facilityName).toLowerCase().includes(String(propertyName).toLowerCase()))
                    .map((loc, index) => {
                      return (
                        <div key={index}>
                          <Card sx={{ padding: '1.5%', marginBottom: '4%', textDecoration: 'none' }}>
                            <Grid container spacing={2}>
                              <Grid
                                item
                                xs={12}
                                md={4}
                                style={{
                                  overflow: 'hidden',
                                }}
                                onClick={handleOpenPic}
                              >
                                {loc.listOfFacilityImages?.length > 0 ? (
                                  <img
                                    src={loc.listOfFacilityImages[0]?.photoURL}
                                    alt=""
                                    className="cardimgzoom"
                                    style={{
                                      width: '120%',
                                      height: '100%',
                                      borderRadius: '20px 20px',
                                      transition: '0.5s all ease-in-out',
                                    }}
                                  />
                                ) : (
                                  <img
                                    className="cardimgzoom"
                                    src={''}
                                    alt=""
                                    style={{
                                      width: '120%',
                                      height: '100%',
                                      borderRadius: '20px 20px',
                                      transition: '0.5s all ease-in-out',
                                    }}
                                  />
                                )}
                              </Grid>
                              <Grid item xs={12} md={8}>
                                <Box>
                                  <Typography variant="subtitle1">
                                    <Link
                                      to={`/search-property-detail/${loc.facilityCode}`}
                                      style={{
                                        textDecoration: 'none',
                                        color: '#000',
                                        fontWeight: '700',
                                        fontSize: '20px',
                                      }}
                                    >
                                      {loc.facilityName}
                                    </Link>
                                  </Typography>

                                  <Typography
                                    style={{ fontSize: '16px', color: 'grey', fontWeight: '600', marginTop: '2px' }}
                                  >
                                    {' '}
                                    {loc.addressLine1} {loc.addressLine2}
                                  </Typography>

                                  <Grid container sx={{ marginTop: '2%' }}>
                                    <Grid item xs={8} md={8} sx={{ display: 'flex' }}>
                                      {loc.listOfUnitTypes &&
                                        loc.listOfUnitTypes.map((typ, index) => {
                                          return (
                                            <div key={index} style={{ fontSize: '16px', fontWeight: '500' }}>
                                              {typ.unitType} &nbsp;
                                            </div>
                                          );
                                        })}
                                    </Grid>
                                    <Grid
                                      item
                                      xs={4}
                                      md={4}
                                      sx={{
                                        display: 'flex',
                                        fontSize: '16px',
                                        fontWeight: '500',
                                        color: '#00AB55',
                                        textDecoration: 'none',
                                      }}
                                    >
                                      <Typography>
                                        <Link
                                          to={`/search-property-detail/${loc.facilityCode}?direction=true`}
                                          style={{
                                            color: '#00AB55',
                                            textDecoration: 'none',
                                          }}
                                        >
                                          <DirectionsOutlinedIcon sx={{ fontSize: '16px' }} /> View Directions
                                        </Link>
                                      </Typography>
                                    </Grid>
                                  </Grid>

                                  <Grid container sx={{ marginTop: '2%' }} spacing={1}>
                                    <Grid item xs={12}>
                                      <Typography
                                        sx={{ color: 'rgb(125, 125, 125)', fontWeight: '400', fontSize: '16px' }}
                                      >
                                        Amenities: &nbsp;{' '}
                                      </Typography>
                                    </Grid>

                                    {loc.facilityAmenities?.length > 0 &&
                                      loc.facilityAmenities[0].amenityNames?.split(',').map((amn, index) => {
                                        return (
                                          <div key={index}>
                                            <Grid item sx={{ marginRight: '10px', marginTop: '5px' }}>
                                              <Card
                                                sx={{
                                                  borderRadius: '30px 30px',
                                                  padding: '10px',
                                                  border: '0.6px solid rgb(190, 190, 190)',
                                                }}
                                              >
                                                <Typography sx={{ fontSize: '14px' }}>{amn} </Typography>
                                              </Card>
                                            </Grid>
                                          </div>
                                        );
                                      })}
                                  </Grid>

                                  <Grid container sx={{ marginTop: '4%' }} spacing={1}>
                                    <Grid item xs={12} md={6}>
                                      <Typography sx={{ display: 'flex', fontSize: '16px' }}>
                                        <span
                                          style={{ color: 'rgb(125, 125, 125)', fontWeight: '400', fontSize: '16px' }}
                                        >
                                          Available: &nbsp;
                                        </span>{' '}
                                        &nbsp; <KingBedOutlinedIcon sx={{ fontSize: '28px', color: '#00AB55' }} />
                                        &nbsp; {loc.available} Beds available
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                      <Typography
                                        sx={{ display: 'flex', fontSize: '16px', paddingLeft: { md: '15px' } }}
                                      >
                                        <span
                                          style={{ color: 'rgb(125, 125, 125)', fontWeight: '400', fontSize: '16px' }}
                                        >
                                          Contact Us: &nbsp;
                                        </span>{' '}
                                        <CallIcon sx={{ color: '#00AB55' }} />
                                        +91 9876543212
                                      </Typography>
                                    </Grid>
                                  </Grid>

                                  <Grid container spacing={2} sx={{ marginTop: '2.5%' }}>
                                    <Grid item xs={12} lg={4} md={12}>
                                      <Box sx={{ mb: 5 }}>
                                        <Typography
                                          variant="subtitle1"
                                          sx={{ color: 'rgb(125, 125, 125)', fontWeight: '400' }}
                                        >
                                          Starts from
                                        </Typography>
                                        <Typography sx={{ color: '#000', fontWeight: '700', fontSize: '20px' }}>
                                          <CurrencyRupeeIcon style={{ fontSize: '17px' }} />
                                          {loc.rentMonthly}/<span style={{ fontSize: '16px' }}>mo*</span>
                                        </Typography>
                                      </Box>
                                    </Grid>
                                    <Grid item>
                                      <Box>
                                        <Button
                                          variant="contained"
                                          target="_blank"
                                          rel="noopener"
                                          href=""
                                          style={{ fontSize: '14px', padding: '14px', fontWeight: '600' }}
                                          onClick={handleOpen}
                                        >
                                          SCHEDULE A VISIT
                                        </Button>
                                      </Box>
                                    </Grid>

                                    <Grid item>
                                      <Box>
                                        <Button
                                          variant="outlined"
                                          target="_blank"
                                          rel="noopener"
                                          href=""
                                          style={{ fontSize: '14px', padding: '14px', fontWeight: '600' }}
                                        >
                                          UNLOCK DISCOUNT
                                        </Button>
                                      </Box>
                                    </Grid>
                                    <Grid item>
                                      <Box>
                                        <Button
                                          variant="outlined"
                                          target="_blank"
                                          rel="noopener"
                                          href=""
                                          style={{ fontSize: '14px', padding: '14px', fontWeight: '600' }}
                                        >
                                          <SupportAgentIcon sx={{ color: '#00AB55' }} /> &nbsp; Support
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
                    })
                ) : (
                  <>
                    {loaded ? (
                      <Stack sx={{ width: '100%' }} spacing={2}>
                        <Alert severity="warning">
                          {/* <AlertTitle>Error</AlertTitle> */}
                          There are no matching properties with that filter—{' '}
                          <strong>Please try to change the filter!</strong>
                        </Alert>
                      </Stack>
                    ) : (
                      <></>
                    )}
                  </>
                )}
              </Grid>
              <Grid item md={4} style={{ height: '100vh', width: '10%', marginTop: '8%' }}>
                {/* <GoogleMapReact
                  bootstrapURLKeys={{ key: '' }}
                  defaultCenter={defaultProps.center}
                  defaultZoom={defaultProps.zoom}
                >
                  <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
                </GoogleMapReact> */}
                <Card style={{ height: '100vh', width: '100%', marginTop: '2%' }}>
                  {propertyData?.length > 0 ? (
                    <GoogleMap key={Math.random()} locations={propertyData} />
                  ) : (
                    <GoogleMap key={Math.random()} locations={propertyData} />
                  )}
                </Card>
              </Grid>
            </Grid>
          </m.div>
        </Grid>
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{ marginBottom: '5%', fontWeight: '700', fontSize: '18px', marginTop: '6%' }}>
            Schedule a Visit
          </Typography>
          <Card
            style={{
              padding: '4%',
              border: '1px solid rgb(96, 195, 173)',
              background: 'linear-gradient(199.5deg, rgba(96, 195, 173, 0.5) -74.79%, rgba(96, 195, 173, 0) 96.63%)',
            }}
          >
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <TextField
                  id="filled-basic"
                  label="First Name"
                  variant="filled"
                  sx={{ input: { background: '#fff' }, borderRadius: '20px 20px' }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="filled-basic"
                  label="Last Name"
                  variant="filled"
                  sx={{ input: { background: '#fff' }, borderRadius: '20px 20px' }}
                />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  fullWidth
                  label="Mobile Number"
                  id="fullWidth"
                  variant="filled"
                  sx={{ input: { background: '#fff' }, borderRadius: '20px 20px' }}
                />
              </Grid>
              <Grid item>
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">I am a</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    defaultValue="Working Professional"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="workingProfessional" control={<Radio />} label="Working Professional" />
                    <FormControlLabel value="student" control={<Radio />} label="Student" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={10}>
                <FormControl variant="filled" fullWidth>
                  {/* <InputLabel id="demo-simple-select-filled-label">Duration of your stay</InputLabel> */}
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    // value={age}
                    // onChange={handleChange}
                    placeholder="Duration of your stay"
                    sx={{ background: '#fff' }}
                  >
                    <MenuItem value="lessThan3Months">Less than 3 months</MenuItem>
                    <MenuItem value="3-6Months">3-6 months</MenuItem>
                    <MenuItem value="moreThan6Months">More than 6 months</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <Typography sx={{ marginBottom: '4%' }}>When are you planning to visit?</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <Card sx={{ padding: '8%', textAlign: 'center', marginTop: '2%' }}>
                      <p>15 Mar</p>
                      <p>Wed</p>
                    </Card>
                  </Grid>
                  <Grid item xs={4}>
                    <Card sx={{ padding: '8%', textAlign: 'center', marginTop: '2%' }}>
                      <p>16 Mar</p>
                      <p>Wed</p>
                    </Card>
                  </Grid>
                  <Grid item xs={4}>
                    <Card sx={{ padding: '8%', textAlign: 'center', marginTop: '2%' }}>
                      <p>17 Mar</p>
                      <p>Wed</p>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Typography sx={{ marginBottom: '4%' }}>What is your preferred time slot?</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <Card sx={{ padding: '8%', textAlign: 'center', marginTop: '2%' }}>
                      <p>9-12</p>
                    </Card>
                  </Grid>
                  <Grid item xs={4}>
                    <Card sx={{ padding: '8%', textAlign: 'center', marginTop: '2%' }}>
                      <p>12-3</p>
                    </Card>
                  </Grid>
                  <Grid item xs={4}>
                    <Card sx={{ padding: '8%', textAlign: 'center', marginTop: '2%' }}>
                      <p>3-6</p>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
          <Button variant="contained" sx={{ width: '100%', marginTop: '6%', padding: '2%' }}>
            Schedule a Visit
          </Button>
          {/* </Grid> */}
        </Box>
      </Modal>

      {/* Image gallery modal */}
      <Modal
        open={openPic}
        onClose={handleClosePic}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={stylePic}>
          {propertyData &&
            propertyData.slice(0, 1).map((loc, index) => {
              return (
                <div key={index}>
                  <Grid container sx={{ marginTop: '20px' }}>
                    <Grid item xs={12}>
                      {loc.listOfFacilityImages?.length > 0 ? <AppCarousel list={loc.listOfFacilityImages} /> : <></>}
                    </Grid>
                  </Grid>
                </div>
              );
            })}
        </Box>
      </Modal>
    </>
  );
}
