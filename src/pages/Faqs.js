// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { FaqsHero, FaqsCategory, FaqsList, FaqsForm } from '../sections/faqs';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

export default function Faqs() {
  return (
    <Page title="Faqs">
      <RootStyle>
        <Container>
          <FaqsHero />
        </Container>
      </RootStyle>
    </Page>
  );
}
