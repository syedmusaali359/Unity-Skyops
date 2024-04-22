import React from "react";
import UnityApp from '../components/UnityApp'
function FirstTech() {
  return (
    <UnityApp
      dataUrl="https://stickball.s3.amazonaws.com/FirstTechBank/firsttech-bank.data"
      frameworkUrl="https://stickball.s3.amazonaws.com/FirstTechBank/firsttech-bank.framework.js"
      loaderUrl="https://stickball.s3.amazonaws.com/FirstTechBank/firsttech-bank.loader.js"
      codeUrl="https://stickball.s3.amazonaws.com/FirstTechBank/firsttech-bank.wasm"
      title="Stickball First Tech"
      vidUrl="https://stickball.s3.amazonaws.com/FirstTech+Bank+Link+Video(Compressed).mp4"
    />
  );
}

export default FirstTech;