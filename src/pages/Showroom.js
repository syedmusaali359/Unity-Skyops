import React from "react";
import UnityApp from '../components/UnityApp'
function Showroom() {
  return (
    <UnityApp
      loaderUrl="https://stickball.s3.amazonaws.com/Build/Built.loader.js"
      dataUrl="https://stickball.s3.amazonaws.com/Build/Built.data"
      frameworkUrl="https://stickball.s3.amazonaws.com/Build/Built.framework.js"
      codeUrl="https://stickball.s3.amazonaws.com/Build/Built.wasm"
      title="Stickball Showroom"
      vidUrl="https://stickball.s3.amazonaws.com/Stickball-1.m4v"
    />
  );
}

export default Showroom;
