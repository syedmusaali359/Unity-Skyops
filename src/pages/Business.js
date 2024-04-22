import React from "react";
import UnityApp from '../components/UnityApp'
function Business() {
    return (
        <UnityApp
            loaderUrl="https://stickball.s3.amazonaws.com/sb-unity-business/business.loader.js"
            dataUrl="https://stickball.s3.amazonaws.com/sb-unity-business/business.data"
            frameworkUrl="https://stickball.s3.amazonaws.com/sb-unity-business/business.framework.js"
            codeUrl="https://stickball.s3.amazonaws.com/sb-unity-business/business.wasm"
            title="Stickball Business"
            vidUrl="https://stickball.s3.amazonaws.com/image-folder/Business_Intro.mp4"
        />
    );
}

export default Business;
