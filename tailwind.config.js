module.exports = {
  purge: [
    './pages/**/*.js',
    './components/**/*.js',
    './components/common/*.js',
    './components/homePage/*.js ',
    './components/sub-event-categories/*.js'],
  options: {
    whitelist: ['.grid', '.grid-cols-3', '.gap-x-5']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset: (theme) => ({
        '1/5': '20%',
        '1/10': '10%',
        '1/20': '4.3%'
      }),
      height: (theme) => ({
        'screen/1.1': '90vh',
        'screen/1.3': '75vh',
        'screen/2': '50vh',
        'screen/3': 'calc(100vh / 3)',
        'screen/4': 'calc(100vh / 4)',
        'screen/5': 'calc(100vh / 5)',
        58: '3.625rem',
        '52px': '3.25rem',
        '18px': '1.125rem',
        '26px': '1.625rem !important',
        115: '7.19rem',
        58: '3.625rem',
        800: '50rem',
        '100px': '6.25rem',
        160: '37rem',
        120: '7.5rem',
        814: '50.75rem',
        935: '58.38rem',
        142.5: '35.625rem',
        152: '35rem',
        147: '9.188rem',
        88: '22rem',
        53: '13.25rem',
        104: '26rem',
        112: '28rem',
        162: '40.5rem',
        66: '16.75rem',
        '32px': '2rem',
        'small-comment-box': '26rem',
        'large-comment-box': '30rem'
      }),
      width: (theme) => ({
        '9/10': '90%',
        'screen/1.1': '98vw',
        'screen/1.3': '75vw',
        'screen/1.5': '66vw',
        'screen/2': '50vw',
        'screen/3': 'calc(100vw / 3)',
        'screen/4': 'calc(100vw / 4)',
        'screen/5': 'calc(100vw / 5)',
        115: '7.19rem',
        '16px': '1rem',
        '163.2px': '10.2rem',
        142.5: '35.625rem',
        88: '22rem',
        148: '37rem',
        162: '40.5rem',
        173.5: '43.375rem',
        15: '3.875rem',
        22: '5.625rem'
      }),
      margin: (theme) => ({
        '9/10': '90%',
        '9/12': '75%',
        '1/3': '30%',
        '2/5': '40%',
        'screen/1.1': '90vw',
        'screen/1.3': '75vh',
        'screen/1.4': '70vw',
        'screen/2': '50vh',
        'screen/3': 'calc(100vh / 3)',
        'screen/4': 'calc(100vh / 4)',
        'screen/5': 'calc(100vh / 5)',
        20.38: '1.274rem',
        21: '1.313rem',
        32.4: '2.025rem',
        4.5: '18rem',
        18: '4.5rem',
        53: '13.25rem',
        13: '3.25rem',
        '18px': '1.125rem'
      }),
      padding: (theme) => ({
        'screen-90': '80vh',
        'screen/1.3': '75vh',
        'screen/2': '50vh',
        'screen/3': 'calc(100vh / 3)',
        'screen/4': 'calc(100vh / 4)',
        'screen/5': 'calc(100vh / 5)',
        4.5: '18rem',
        '52px': '3.25rem',
        18: '4.5rem',
        53: '13.25rem',
        22: '1.375rem',
        '18px': '1.125rem',
        '34px': '2.125rem',
        17: '4.25rem'
      }),
      borderRadius: (theme) => ({
        '10px': '0.625rem',
        '7px': '0.438rem',
        '20px': '1.125rem'
      }),
      backgroundColor: (theme) => ({
        ...theme('colors'),
        primary: '#EDEEF6',
        secondary: '#7A76FF',
        'primary-btn': '#FF794D',
        back: 'rgba(135, 132, 255, 0.21)',
        ourClientsBg: '#E8E8FF',
        eventPlaningBg: '#220041',
        orangeButton: '#FF794D',
        helpBg1: '#3089F2',
        helpBg2: '#8784FF',
        yourEventRequestBg: '#F3F3F9',
        reviewPrimaryBg: '#7A76FF',
        reviewSecondaryBg: '#40DCA8',
        reviewCardMobileBg: '#F6F7FB',
        nameIconPrimaryBg: '#6FC2DD',
        nameIconSecondaryBg: '#6FC2DD',
        'footer-bottom': '#070707',
        footer: '#F7F7F7',
        contactUsBg: '#FBF4F1'
      }),
      textColor: (theme) => ({
        'text-black': '#18191F',
        'bg:light': '#F6F7FB',
        'title:color': '#2A2A2A',
        'eva:gray': '#4A5576',
        gray: '#4A5576',
        'light-gray': '#4F4F4F',
        'dim-gray': '#CECECE',
        'footer-header': '#222222',
        'footer-links': '#717171',
        'footer-alt': '#FFFFFF',
        orangeColor: '#FF794D',
        notes: '#717171',
        secondary: '#7A76FF',
        review: '#282828',
        'primary-black':'#242424'
      }),
      fontWeight: (theme) => ({
        normal: '400',
        "aboveNormal":"450"
      }),
      fontSize: (theme) => ({
        'title:size': [33, 36],
        '18px': '0.938rem',
        '28px': '1.75rem'
      }),
      fontFamily: (theme) => ({
        'circular-std': 'Circular Std'
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('tailwindcss-rtl')
  ]
};
