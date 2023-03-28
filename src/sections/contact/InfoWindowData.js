import { Box, Grid, Typography } from '@mui/material';
import axios from 'axios';
import moment from 'moment';
import React, { Component, Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';

import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

class InfoWindowData extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    return (
      <div style={{ paddingRight: '5px' }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={4}
            style={{
              overflow: 'hidden',
            }}
          >
            {this.props.activeMarkerData?.listOfFacilityImages?.length > 0 ? (
              <img
                src={this.props.activeMarkerData?.listOfFacilityImages[0]?.photoURL}
                alt=""
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '20px 20px',
                }}
              />
            ) : (
              <img
                className="cardimgzoom"
                src={''}
                alt=""
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '20px 20px',
                }}
              />
            )}
          </Grid>
          <Grid item xs={8}>
            <Box>
              <Typography variant="subtitle1" sx={{ fontSize: '16px' }}>
                {this.props.activeMarkerData?.facilityName}
              </Typography>

              <Typography style={{ fontSize: '12px', color: 'grey', fontWeight: '600', marginTop: '2px' }}>
                {' '}
                {this.props.activeMarkerData?.addressLine1} {this.props.activeMarkerData?.addressLine2}
              </Typography>

              <Grid container spacing={2} sx={{ marginTop: '2.5%' }}>
                <Grid item xs={12} lg={4} md={12}>
                  <Box sx={{ mb: 5 }}>
                    <Typography variant="subtitle1" sx={{ color: 'rgb(125, 125, 125)', fontWeight: '400' }}>
                      Starts from
                    </Typography>
                    <Typography sx={{ color: '#000', fontWeight: '700', fontSize: '20px', display: 'flex' }}>
                      <CurrencyRupeeIcon style={{ width: '14px', height: '14px' }} />
                      {this.props.activeMarkerData?.rentMonthly}/<span style={{ fontSize: '16px' }}>mo*</span>
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default InfoWindowData;
