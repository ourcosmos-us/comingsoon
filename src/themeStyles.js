const theme = {
    actionButton: {
        backgroundColor: 'rgba(223, 31, 45, 1)',
        color: '#DF1F2D',
    },
    primary: {
      backgroundColor: 'rgba(255, 255, 255,1)',
      color: '#ffffff',
    },
    secondary: {
      backgroundColor: 'rgba(30,40,60,0.05)',
      color: '#5a28be',
    },
    callToAction: {
      backgroundColor: '#FF5C5C',
    },
    cosmicRed: {
      backgroundColor: 'rgba(153, 10, 37, 1)', 
      color: '#990a25',
    },
    primaryRed: {
        backgroundColor: 'rgba(177, 19, 19, 1)',
        color: '#2B3784',
    },
    primaryBlue: {
        backgroundColor: 'rgba(43, 55, 132, 1)',
      color: '#2B3784',
    },
  };
  
  export default {
    '@global': {
      'body': {
        backgroundColor: theme.primary.backgroundColor,
        color: theme.primary.color,
      },
      // we should not override properties like I'm doing below
      // short term solution
      '.app__header': {
        backgroundColor: '#1c2b39',
        '&:before': {
          backgroundColor: 'unset',
        },
      },
      '.app__logo': {
        width: '15rem !important',    
      },
    },
    ...theme,
  };
  