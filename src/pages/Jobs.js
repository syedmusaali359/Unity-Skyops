import React from "react";
import UnityApp from '../components/UnityApp'
function Jobs() {
    return (
        <UnityApp
            loaderUrl="https://stickball.s3.amazonaws.com/sb-unity-jobs/jobs.loader.js"
            dataUrl="https://stickball.s3.amazonaws.com/sb-unity-jobs/jobs.data"
            frameworkUrl="https://stickball.s3.amazonaws.com/sb-unity-jobs/jobs.framework.js"
            codeUrl="https://stickball.s3.amazonaws.com/sb-unity-jobs/jobs.wasm"
            title="Jobs"
            vidUrl="https://stickball.s3.amazonaws.com/image-folder/Jobs_Intro.mp4"
        />
    );
}

export default Jobs;
