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
import _ from 'lodash';
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

// ------------------------------------------------------------------

export default function ContactHero() {
  const [location, setLocation] = React.useState([]);
  const [locations, setLocations] = React.useState([]);
  const [propertyData, setPropertyData] = React.useState([]);
  const [allData, setAllData] = React.useState([]);
  const [filter, setFilter] = React.useState({});
  const [filterTypes, setFilterTypes] = React.useState([]);

  const navigate = useNavigate();

  React.useEffect(() => {
    API.get('/api/WebsiteAPI/GetListOfLocations?APIKey=eJgDBiLVjroiksSVS8jLW5YXcHUAJOe5ZeOx80T9mzo=&CityCode=Hyd')
      .then((response) => {
        setLocations(response.data?.listOfLocations);
        setLocation(response.data?.listOfLocations);
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
  const [openModal, setOpenModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const isDesktop = useResponsive('up', 'lg');
  const checkboxLabel = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  const getAllLocations = useCallback(async () => {
    const locationid = window.location.pathname.split('/')[3];

    try {
      await API.post('/api/WebsiteAPI/GetListOfProperties', {
        apiKey: 'eJgDBiLVjroiksSVS8jLW5YXcHUAJOe5ZeOx80T9mzo=',
        location: locationid,
        amenities: '',
        services: '',
        amountStartRange: '0',
        amountEndRange: '10000000',
      })
        .then((res) => {
          setPropertyData(res.data.listOfProperties);
          setAllData(res.data.listOfProperties);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.error(error);
    }
  }, []);

  // useEffect(() => {
  //   getAllLocations();
  // }, [getAllLocations]);

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

  const handleFilter = (type, value) => {
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

        currentFilter[type].locations = locations_;
        currentFilter[type].values = values_;

        setFilter(currentFilter);

        break;
      }

      case 'Budget': {
        if (!currentFilter[type]) currentFilter[type] = [5000, 12000];

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
        if (!currentFilter[type]) currentFilter[type] = 'Male';

        currentFilter[type] = value;
        setFilter(currentFilter);
        break;
      }

      case 'Amenities': {
        if (!currentFilter[type]) currentFilter[type] = [];

        if (currentFilter[type]?.includes(value))
          currentFilter[type] = currentFilter[type].filter((vt) => vt !== value);
        else currentFilter[type] = [...currentFilter[type], value];

        setFilter(currentFilter);
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
              values.forEach(async (tid) => {
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
                  })
                  .catch((err) => console.log(err));
              });
            }
            break;
          }

          case 'Budget': {
            if (filterOpt[key]) {
              data = data.filter((dt) => dt.rentMonthly >= filterOpt[key][0] && dt.rentMonthly <= filterOpt[key][1]);
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
            if (filterOpt[key]) {
              data = data.filter((dt) => {
                if (dt.facilityAmenities?.length <= 0) return true;

                const names = dt.facilityAmenities[0]?.amenityNames?.split(',');

                console.log('rrrrrrrrrrrrrrrr', names, filterOpt[key]);
                let flag = false;

                filterOpt[key].forEach((ft) => {
                  if (names.includes(ft)) flag = true;
                });

                return flag;
              });
            }
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
                        onClick={(e) => handleFilterTypes(e, 'Locality')}
                        sx={{
                          color: 'rgb(41, 45, 50)',
                          fontWeight: '400',
                          borderRadius: '40px',
                          padding: '10px 20px',
                          margin: '5px',
                          border: '1px solid rgb(232, 232, 232)',
                          fontSize: '13px',
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
                                onChange={(e) => {}}
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
                          {locations?.map((item) => (
                            <StyledBreadcrumb
                              style={{
                                border: '1px solid grey',
                                padding: '15px',
                                margin: '10px',
                                background: filter?.Locality?.values?.includes(item.id) ? 'red' : 'white',
                              }}
                              component="a"
                              href="#"
                              label={item.value}
                              onClick={() => handleFilter('Locality', item)}
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
                          padding: '10px 20px',
                          margin: '5px',
                          border: '1px solid rgb(232, 232, 232)',
                          fontSize: '13px',
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
                            value={filter?.Budget || [5000, 12000]}
                            onChange={(e, value) => handleFilter('Budget', value)}
                            aria-label="pretto slider"
                            min={5000}
                            max={12000}
                          />
                          <div style={{ padding: '20px', display: 'flex', justifyContent: 'spaceBetween' }}>
                            <TextField
                              id="outlined-basic"
                              label="min price"
                              variant="outlined"
                              value={filter?.Budget ? filter?.Budget[0] : 5000}
                              style={{ marginRight: '10px', maxWidth: '140px' }}
                            />
                            <span style={{ paddingTop: '15px' }}>-</span>
                            <TextField
                              id="outlined-basic"
                              label="max price"
                              value={filter?.Budget ? filter?.Budget[1] : 12000}
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
                          padding: '10px 20px',
                          margin: '5px',
                          border: '1px solid rgb(232, 232, 232)',
                          fontSize: '13px',
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
                          ]?.map((item) => (
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
                          padding: '10px 20px',
                          margin: '5px',
                          border: '1px solid rgb(232, 232, 232)',
                          fontSize: '13px',
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
                          padding: '10px 20px',
                          margin: '5px',
                          border: '1px solid rgb(232, 232, 232)',
                          fontSize: '13px',
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
                          <div style={{ marginBottom: '15px' }}>
                            <Checkbox
                              checked={filter.Amenities?.includes('Attatched Balcony')}
                              onClick={(e) => handleFilter('Amenities', 'Attatched Balcony')}
                              {...checkboxLabel}
                            />
                            Attatched Balcony
                            <Checkbox
                              checked={filter.Amenities?.includes('Air Conditioning')}
                              onClick={(e) => handleFilter('Amenities', 'Air Conditioning')}
                              {...checkboxLabel}
                            />
                            Air Conditioning
                            <Checkbox
                              checked={filter.Amenities?.includes('Attached Washroom')}
                              onClick={(e) => handleFilter('Amenities', 'Attached Washroom')}
                              {...checkboxLabel}
                            />
                            Attached Washroom
                            <Checkbox
                              checked={filter.Amenities?.includes('Spacious Cupboard')}
                              onClick={(e) => handleFilter('Amenities', 'Spacious Cupboard')}
                              {...checkboxLabel}
                            />
                            Spacious Cupboard
                            <Checkbox
                              checked={filter.Amenities?.includes('Storage Shelf')}
                              onClick={(e) => handleFilter('Amenities', 'Storage Shelf')}
                              {...checkboxLabel}
                            />
                            Storage Shelf
                            <Checkbox
                              checked={filter.Amenities?.includes('Desert Cooler')}
                              onClick={(e) => handleFilter('Amenities', 'Desert Cooler')}
                              {...checkboxLabel}
                            />
                            Desert Cooler
                            <Checkbox
                              checked={filter.Amenities?.includes('Shared Washroom')}
                              onClick={(e) => handleFilter('Amenities', 'Shared Washroom')}
                              {...checkboxLabel}
                            />
                            Shared Washroom
                            <Checkbox
                              checked={filter.Amenities?.includes('Window')}
                              onClick={(e) => handleFilter('Amenities', 'Window')}
                              {...checkboxLabel}
                            />
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
                              onClick={(e) => handleClearFilter(e, 'Amenities')}
                            >
                              Clear
                            </Button>
                            <Button
                              style={{ background: '#00AB55', color: 'white', padding: '10px 30px' }}
                              onClick={(e) => handleFilterData(null, e, 'Amenities')}
                            >
                              Save
                            </Button>
                          </div>
                        </div>
                      </Popover>
                    </div>

                    <span style={{ margin: '18px' }}> | </span>
                    {/* <div>
                      <Button
                        variant="outlined"
                        sx={{
                          color: 'rgb(41, 45, 50)',
                          fontWeight: '400',
                          borderRadius: '40px',
                          padding: '10px 20px',
                          margin: '5px',
                          border: '1px solid rgb(232, 232, 232)',
                          fontSize: '13px',
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
                          fontSize: '13px',
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
                          {locations?.map((item) => (
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
                    </div> */}

                    <div>
                      <Button
                        aria-describedby={id}
                        variant="outlined"
                        onClick={(e) => handleFilterTypes(e, 'Popularity')}
                        sx={{
                          fontWeight: '400',
                          borderRadius: '40px',
                          padding: '10px 20px',
                          margin: '5px',
                          border: '0px',
                          background: 'rgb(249, 249, 249)',
                          color: ' rgb(125, 125, 125)',
                          fontSize: '13px',
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
                            {/* <Button>Sort By: Popularity</Button> */}
                          </div>
                          {/* <hr />
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
                            <Button
                              style={{ background: '#00AB55', color: 'white', padding: '10px 30px' }}
                              onClick={(e) => handleFilterTypes(e, 'Popularity')}
                            >
                              Save
                            </Button>
                          </div> */}
                        </div>
                      </Popover>
                    </div>
                  </div>
                </Grid>
              </Grid>
            ) : (
              <Grid container>
                {/* <Grid item xs={3}>
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
                        fontSize: '11px',
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
                        fontSize: '10px',
                      }}
                      onClick={(e) => handleFilterTypes(e, 'Popularity')}
                    >
                      <TuneRoundedIcon />
                      &nbsp; More Filters
                    </Button>
                  </div>
                </Grid> */}
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
                          {/* <Button>Sort By: Popularity</Button> */}
                        </div>
                        {/* <hr />
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
                          <Button style={{ background: '#00AB55', color: 'white', padding: '10px 30px' }}>Save</Button>
                        </div> */}
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

                {propertyData &&
                  propertyData?.length > 0 &&
                  propertyData.map((loc) => {
                    return (
                      <div key={loc.facilityCode}>
                        <Card sx={{ padding: '3%', marginBottom: '4%', textDecoration: 'none' }}>
                          <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
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

                                <Grid container sx={{ marginTop: '2%', fontSize: '12px' }}>
                                  <Grid item xs={8} md={8} sx={{ display: 'flex' }}>
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
