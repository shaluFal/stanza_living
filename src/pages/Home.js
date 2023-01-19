// @mui
import { styled } from '@mui/material/styles';
import { GridFooter } from '@mui/x-data-grid';
import MainFooter from '../layouts/main/MainFooter';
// components
import Page from '../components/Page';
// sections
import {
  HomeHero,
  HomeMinimal,
  HomeDarkMode,
  HomeLookingFor,
  HomeColorPresets,
  HomePricingPlans,
  HomeAdvertisement,
  HomeCleanInterfaces,
  HomeHugePackElements,
} from '../sections/home';
import { AboutTeam } from '../sections/about';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="Coliving">
      <HomeHero />

      <ContentStyle>
     

        <HomeHugePackElements />

        <HomeDarkMode />

        <HomeColorPresets />

        <HomeCleanInterfaces />

        {/* <HomePricingPlans /> */}
           <HomeMinimal />

        {/* <HomeLookingFor /> */}
        <AboutTeam />

        {/* <HomeAdvertisement /> */}
        <MainFooter />
      </ContentStyle>
    </Page>
  );
}
