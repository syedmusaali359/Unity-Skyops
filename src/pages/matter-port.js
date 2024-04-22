import React from "react";
import UnityApp from '../components/UnityApp'
function Matterport() {
    return (
        <UnityApp
            loaderUrl="https://stickball.s3.amazonaws.com/matterport/matterport.loader.js"
            dataUrl="https://stickball.s3.amazonaws.com/matterport/matterport.data"
            frameworkUrl="https://stickball.s3.amazonaws.com/matterport/matterport.framework.js"
            codeUrl="https://stickball.s3.amazonaws.com/matterport/matterport.wasm"
            title="Matter Port"
            vidUrl=""
        />
    );
}

export default Matterport;
