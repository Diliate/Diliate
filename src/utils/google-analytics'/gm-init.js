import ReactGA from "react-ga";
 const googleAnlyticsActions={};

 googleAnlyticsActions.initGoogleAnalytics = async(key)=>{
        ReactGA.initialize(key);
        ReactGA.pageview(window.location.pathname + window.location.search);
 } ;
 
 export {googleAnlyticsActions};