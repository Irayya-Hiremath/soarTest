import { Icon } from '@iconify/react';

export default  navigation = [
    {
      icon: <Icon style={{height:'25px',width:'25px'}} icon="ic:baseline-home" />,
      name: 'Dashboard',
      path: '/home',
    },
    {
      icon: <Icon style={{height:'25px',width:'25px'}} icon="fa-solid:file-invoice-dollar" />,
      name: 'Transactions',
      path: '/transactions',
    },
    {
      icon: <Icon style={{height:'25px',width:'25px'}} icon="mdi:account" />,
      name: 'Accounts',
      path: '/accounts',
    },

    {
      icon: <Icon style={{height:'25px',width:'25px'}} icon="streamline:investment-selection-solid" />,
      name: 'Investments',
      path: '/investments',
    },
    {
      icon: <Icon style={{height:'25px',width:'25px'}} icon="hugeicons:repair" />,
      name: 'Services',
      path: '/services',
    },
    {
      icon: <Icon style={{height:'25px',width:'25px'}} icon="hugeicons:save-money-pound"  />,
      name: 'Loans',
      path: '/loans',
    },
    {
      icon: <Icon style={{height:'25px',width:'25px'}} icon="material-symbols:settings" />,
      name: 'Settings',
      path: '/settings',
    },

    {
      icon: <Icon style={{height:'25px',width:'25px'}} icon="hugeicons:two-factor-access" />,
      name: 'My Privileges',
      path: '/privileges',
    },
   
  ];
