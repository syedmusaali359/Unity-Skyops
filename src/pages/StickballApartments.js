import React from "react";
import UnityApp from '../components/UnityApp'
function StickballApartments() {
  return (
    <UnityApp
      loaderUrl="https://stickball.s3.amazonaws.com/apartments/apartments.loader.js"
      dataUrl="https://stickball.s3.amazonaws.com/apartments/apartments.data"
      frameworkUrl="https://stickball.s3.amazonaws.com/apartments/apartments.framework.js"
      codeUrl="https://stickball.s3.amazonaws.com/apartments/apartments.wasm"
      title="Stickball Apartments"
      vidUrl="https://stickball.s3.amazonaws.com/Apartments+Intro+Video+-+Made+with+Clipchamp.mp4"
    />
  );
}

export default StickballApartments;
