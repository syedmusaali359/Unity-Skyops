import React from "react";
import UnityApp from '../components/UnityApp'
function SticballCompany() {
  return (
    <UnityApp
      loaderUrl="https://stickball.s3.amazonaws.com/stickball-company-unity/stickball-company.loader.js"
      dataUrl="https://stickball.s3.amazonaws.com/stickball-company-unity/stickball-company.data"
      frameworkUrl="https://stickball.s3.amazonaws.com/stickball-company-unity/stickball-company.framework.js"
      codeUrl="https://stickball.s3.amazonaws.com/stickball-company-unity/stickball-company.wasm"
      title="Stickball Company"
      vidUrl="https://stickball.s3.amazonaws.com/StickBall+Compnay+Link+Video(Compressed).mp4"
    />
  )
}

export default SticballCompany;
