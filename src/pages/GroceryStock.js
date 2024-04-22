import React from "react";
import UnityApp from '../components/UnityApp'
function GroceryStock() {
  return (
    <UnityApp
      loaderUrl={process.env.REACT_APP_GROCERY_STOCK_LOADER_URL}
      dataUrl={process.env.REACT_APP_GROCERY_STOCK_DATA_URL}
      frameworkUrl={process.env.REACT_APP_GROCERY_STOCK_FRAMEWORK_URL}
      codeUrl={process.env.REACT_APP_GROCERY_STOCK_WASM_URL}
      title="Stickball Grocery Stock"
      vidUrl="https://stickball.s3.amazonaws.com/GroceryStock_720p.mp4"
    />
  );
}

export default GroceryStock;
