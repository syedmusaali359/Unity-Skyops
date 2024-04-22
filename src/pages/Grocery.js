import React from "react";
import UnityApp from '../components/UnityApp'
function Grocery() {
  return (
    <UnityApp
      loaderUrl={process.env.REACT_APP_GROCERY_STORE_LOADER_URL}
      dataUrl={process.env.REACT_APP_GROCERY_STORE_DATA_URL}
      frameworkUrl={process.env.REACT_APP_GROCERY_STORE_FRAMEWORK_URL}
      codeUrl={process.env.REACT_APP_GROCERY_STORE_WASM_URL}
      title="Stickball Grocery Store"
      vidUrl="https://stickball.s3.amazonaws.com/Grocery+Store+Compressed.mp4"
    />
  );
}

export default Grocery;
