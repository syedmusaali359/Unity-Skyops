import React from "react";
import UnityApp from '../components/UnityApp'
function DocotorOffice() {
  return (
    <UnityApp
      loaderUrl="https://stickball.s3.amazonaws.com/hospital/hospital.loader.js"
      dataUrl="https://stickball.s3.amazonaws.com/hospital/hospital.data"
      frameworkUrl="https://stickball.s3.amazonaws.com/hospital/hospital.framework.js"
      codeUrl="https://stickball.s3.amazonaws.com/hospital/hospital.wasm"
      title="Stickball Doctor's Office"
      vidUrl="https://stickball.s3.amazonaws.com/Doctor's+Office+Intro.mp4"
    />
  );
}

export default DocotorOffice;
