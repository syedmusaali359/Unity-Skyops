import React from "react";
import UnityApp from '../components/UnityApp'
function School() {
    return (
        <UnityApp
            loaderUrl="https://stickball.s3.amazonaws.com/Build/school.loader.js"
            dataUrl="https://stickball.s3.amazonaws.com/Build/school.data"
            frameworkUrl="https://stickball.s3.amazonaws.com/Build/school.framework.js"
            codeUrl="https://stickball.s3.amazonaws.com/Build/school.wasm"
            title="Stickball School"
            vidUrl="https://stickball.s3.amazonaws.com/image-folder/StickballSchool_Intro.mp4"
        />
    );
}

export default School;
