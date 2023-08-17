import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";

const Splash = (props) => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1500);
   props.navigation.navigate("whatAppheader")
   }, []);

  return <></>;
};

export default Splash