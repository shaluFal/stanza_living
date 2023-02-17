// routes
import { PATH_AUTH, PATH_DOCS, PATH_PAGE } from '../../routes/paths';
// components
import { PATH_AFTER_LOGIN } from '../../config';
// components
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [
  {
    title: 'Explore Residences',
    icon: <Iconify icon={'eva:home-fill'} {...ICON_SIZE} />,
    path: '/',
  },

  {
    title: 'Know More',
    path: '/pages',
    icon: <Iconify icon={'eva:file-fill'} {...ICON_SIZE} />,
    children: [
      {
        items: [
          { title: 'About us', path: PATH_PAGE.about },
          { title: 'About Team', path: PATH_PAGE.contact },
          { title: 'Partner With Us', path: PATH_PAGE.faqs },
        ],
      },
    ],
  },
];

export default menuConfig;
