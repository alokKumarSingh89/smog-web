export const navItems = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Czujniki',
    url: '/looko2',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'LookO2',
        url: '/looko2',
        icon: 'icon-puzzle',
        badge: {
          variant: 'info',
          text: 'NEW'
        }
      },
    ]
  },
  {
    name: 'Raporty',
    url: '/reports',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Excel',
        url: '/reports/excel',
        icon: 'icon-puzzle',
        badge: {
          variant: 'info',
          text: 'NEW'
        }
      },
    ]
  },
];
