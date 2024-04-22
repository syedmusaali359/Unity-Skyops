import React from "react";
import UnityApp from '../components/UnityApp'
function Mall() {
  return (
    <UnityApp
      loaderUrl="https://stickball.s3.amazonaws.com/BuildMall/built+41.loader.js"
      dataUrl="https://stickball.s3.amazonaws.com/BuildMall/built+41.data"
      frameworkUrl="https://stickball.s3.amazonaws.com/BuildMall/built+41.framework.js"
      codeUrl="https://stickball.s3.amazonaws.com/BuildMall/built+41.wasm"
      title="Stickball Mall"
      vidUrl="https://stickball.s3.amazonaws.com/Stickball+Mall+Intro.mp4"
    />
  );
}

export default Mall;
