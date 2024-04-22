import React from "react";
import UnityApp from '../components/UnityApp'
function Stock() {
  return (
    <UnityApp
      loaderUrl="https://stickball.s3.amazonaws.com/BuildStock/stockbroker.loader.js"
      dataUrl="https://stickball.s3.amazonaws.com/BuildStock/stockbroker.data"
      frameworkUrl="https://stickball.s3.amazonaws.com/BuildStock/stockbroker.framework.js"
      codeUrl="https://stickball.s3.amazonaws.com/BuildStock/stockbroker.wasm"
      title="Stickball Financial Advisors"
      vidUrl="https://stickball.s3.amazonaws.com/Financial+Advisors+Intro.mp4"
    />
  )
}

export default Stock;
