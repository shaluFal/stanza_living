// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container } from '@mui/material';
// _mock
import { _mapContact } from '../_mock';
// components
import Page from '../components/Page';
import { ContactHero, ContactForm, ContactMap } from '../sections/contact';
import SearchPropertyDetailPage from './SearchPropertyDetailPage';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

export default function Contact() {
  return (
    <Page title="Search Property">
      <RootStyle>
        <ContactHero />

        {/* <SearchPropertyDetailPage /> */}

        {/* <Container sx={{ my: 10 }}>
          <Grid container spacing={10}>
            <Grid item xs={12} md={6}>
              <ContactForm />
            </Grid>

            <Grid item xs={12} md={6}>
              <ContactMap contacts={_mapContact} />
            </Grid>
          </Grid>
        </Container> */}
      </RootStyle>
    </Page>
  );
}