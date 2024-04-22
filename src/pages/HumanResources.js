import React from "react";
import UnityApp from '../components/UnityApp'
function HumanResources() {
  return (
    <UnityApp
      loaderUrl="https://stickball.s3.amazonaws.com/human-resources-unity/human-resources.loader.js"
      dataUrl="https://stickball.s3.amazonaws.com/human-resources-unity/human-resources.data"
      frameworkUrl="https://stickball.s3.amazonaws.com/human-resources-unity/human-resources.framework.js"
      codeUrl="https://stickball.s3.amazonaws.com/human-resources-unity/human-resources.wasm"
      title="Human Resources"
      vidUrl="https://stickball.s3.amazonaws.com/Human+Resources+Link+Load+Video(Compressed+10+MB).mp4"
    />
  );
}

export default HumanResources;
