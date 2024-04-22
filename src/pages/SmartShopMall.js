import React from "react";
import UnityApp from '../components/UnityApp'
function SmartShopMall() {
  return (
    <UnityApp
      dataUrl="https://stickball.s3.amazonaws.com/smartshop-mall/smartshop-mall.data"
      frameworkUrl="https://stickball.s3.amazonaws.com/smartshop-mall/smartshop-mall.framework.js"
      loaderUrl="https://stickball.s3.amazonaws.com/smartshop-mall/smartshop-mall.loader.js"
      codeUrl="https://stickball.s3.amazonaws.com/smartshop-mall/smartshop-mall.wasm"
      title="Smart Shopping Mall"
      vidUrl="https://stickball.s3.amazonaws.com/Smart+Shop+Mall+Intro(Remade).mp4"
    />
  );
}

export default SmartShopMall;