import React from "react";
import UnityApp from '../components/UnityApp'
function PersonalBanking() {
  return (
    <UnityApp
      dataUrl="https://stickball.s3.amazonaws.com/PersonalBanking/personal-banking.data"
      frameworkUrl="https://stickball.s3.amazonaws.com/PersonalBanking/personal-banking.framework.js"
      loaderUrl="https://stickball.s3.amazonaws.com/PersonalBanking/personal-banking.loader.js"
      codeUrl="https://stickball.s3.amazonaws.com/PersonalBanking/personal-banking.wasm"
      title="Stickball PNC Bank"
      vidUrl="https://stickball.s3.amazonaws.com/PersonalBanking/Intro%2BPersonal%2BBanking.mp4"
    />
  );
}

export default PersonalBanking;