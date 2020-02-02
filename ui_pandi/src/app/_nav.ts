import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/home/dashboard',
    icon: 'icon-speedometer'
  },
  {
    name: 'Organization',
    url: '/home/organization',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Company Profile',
        url: '/home/organization/companyprofile',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Onkearding',
    url: '/home/onkearding',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Personal Info',
        url: '/home/onkearding/personalinfo',
        icon: 'icon-cursor'
      }
    ]
  },
  
  {
    divider: true
  },
  
];
