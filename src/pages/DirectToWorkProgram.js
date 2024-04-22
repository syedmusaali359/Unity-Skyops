import React from "react";
import UnityApp from '../components/UnityApp'
function DirectToWorkProgram() {
  return (
    <UnityApp
      loaderUrl="https://stickball.s3.amazonaws.com/direct-to-work-program/direct-to-work-program.loader.js"
      dataUrl="https://stickball.s3.amazonaws.com/direct-to-work-program/direct-to-work-program.data"
      frameworkUrl="https://stickball.s3.amazonaws.com/direct-to-work-program/direct-to-work-program.framework.js"
      codeUrl="https://stickball.s3.amazonaws.com/direct-to-work-program/direct-to-work-program.wasm"
      title="Direct to Work Program"
      vidUrl=""
    />
  );
}

export default DirectToWorkProgram;
