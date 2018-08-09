var admobid = {};

// TODO: replace the following ad units with your own
if( /(android)/i.test(navigator.userAgent) ) {
  admobid = { // for Android
    banner: 'ca-app-pub-9732535637352249/5705077819'
  };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
  admobid = { // for iOS
    banner: 'ca-app-pub-9732535637352249/5705077819'
  };
} else {
  admobid = { // for Windows Phone
    banner: 'ca-app-pub-9732535637352249/5705077819'
  };
}

function initApp() {
  if (!window.cordova || window.cordova.platformId === 'browser') return;
  if (! window.AdMob ) {
      //try again after 1 second.
      setTimeout(initApp, 1000);
      return;
  }

  // this will create a banner on startup
  window.AdMob.createBanner( {
    adId: admobid.banner,
    position: window.AdMob.AD_POSITION.BOTTOM_CENTER,
    isTesting: true, // TODO: remove this line when release
    overlap: false,
    AutoShow: true,
    offsetTopBar: false,
    bgColor: 'white',
    adSize: 'SMART_BANNER'
  } );
}

initApp();