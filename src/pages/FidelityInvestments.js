import { Unity, useUnityContext } from "react-unity-webgl";
import React from "react";
import UnityApp from '../components/UnityApp'
function FidelityInvestment() {
  return (
    <UnityApp
      loaderUrl="https://stickball.s3.amazonaws.com/FidelityInvestments/fidelity-investments.loader.js"
      dataUrl="https://stickball.s3.amazonaws.com/FidelityInvestments/fidelity-investments.data"
      frameworkUrl="https://stickball.s3.amazonaws.com/FidelityInvestments/fidelity-investments.framework.js"
      codeUrl="https://stickball.s3.amazonaws.com/FidelityInvestments/fidelity-investments.wasm"
      title="Stickball Fidelity Investments"
      vidUrl="https://stickball.s3.amazonaws.com/Fidelity+Investments+Intro.mp4"
    />
  );
}

export default FidelityInvestment;
