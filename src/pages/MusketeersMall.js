import React from "react";
import UnityApp from '../components/UnityApp'
function MusketeersMall() {
  return (
    <UnityApp
      dataUrl="https://stickball.s3.amazonaws.com/Mall/musketeers-mall.data"
      frameworkUrl="https://stickball.s3.amazonaws.com/Mall/musketeers-mall.framework.js"
      loaderUrl="https://stickball.s3.amazonaws.com/Mall/musketeers-mall.loader.js"
      codeUrl="https://stickball.s3.amazonaws.com/Mall/musketeers-mall.wasm"
      title="Musketeers Mall"
      vidUrl="https://stickball.s3.amazonaws.com/Musketeer+Mall+Link+Video+(Compressed).mp4"
    />
  );
}

export default MusketeersMall;