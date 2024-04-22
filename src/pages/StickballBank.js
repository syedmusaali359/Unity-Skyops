import React from "react";
import UnityApp from '../components/UnityApp'
function StickballBank() {
  return (
    <UnityApp
      dataUrl="https://stickball.s3.amazonaws.com/stickballBank/stickball-bank.data"
      frameworkUrl="https://stickball.s3.amazonaws.com/stickballBank/stickball-bank.framework.js"
      loaderUrl="https://stickball.s3.amazonaws.com/stickballBank/stickball-bank.loader.js"
      codeUrl="https://stickball.s3.amazonaws.com/stickballBank/stickball-bank.wasm"
      title="Stickball Bank"
      vidUrl="https://stickball.s3.amazonaws.com/Stickball+Bank+Intro.mp4"
    />
  );
}

export default StickballBank;