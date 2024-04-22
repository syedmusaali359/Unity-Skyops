import React from "react";
import UnityApp from '../components/UnityApp'
function Hospital() {
  return (
    <UnityApp
      dataUrl="https://stickball.s3.amazonaws.com/old-hospital/OldHospital.data"
      frameworkUrl="https://stickball.s3.amazonaws.com/old-hospital/OldHospital.framework.js"
      loaderUrl="https://stickball.s3.amazonaws.com/old-hospital/OldHospital.loader.js"
      codeUrl="https://stickball.s3.amazonaws.com/old-hospital/OldHospital.wasm"
      title="Stickball Hospital"
      vidUrl="https://stickball.s3.amazonaws.com/Unity+Hospital+Link+Video(Compressed).mp4"
    />
  );
}

export default Hospital;