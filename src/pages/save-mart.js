import React from "react";
import UnityApp from '../components/UnityApp'
function SaveMart() {
    return (
        <UnityApp
            loaderUrl="https://stickball.s3.amazonaws.com/save-mart/save-mart.loader.js"
            dataUrl="https://stickball.s3.amazonaws.com/save-mart/save-mart.data"
            frameworkUrl="https://stickball.s3.amazonaws.com/save-mart/save-mart.framework.js"
            codeUrl="https://stickball.s3.amazonaws.com/save-mart/save-mart.wasm"
            title="Save Mart"
            vidUrl=""
        />
    );
}

export default SaveMart;
