import React from "react";
import UnityApp from '../components/UnityApp'
function OtherCareers() {
    return (
        <UnityApp
            loaderUrl="https://stickball.s3.amazonaws.com/sb-unity-othercareer/othercareer.loader.js"
            dataUrl="https://stickball.s3.amazonaws.com/sb-unity-othercareer/othercareer.data"
            frameworkUrl="https://stickball.s3.amazonaws.com/sb-unity-othercareer/othercareer.framework.js"
            codeUrl="https://stickball.s3.amazonaws.com/sb-unity-othercareer/othercareer.wasm"
            title="Stickball Careers"
            vidUrl="https://stickball.s3.amazonaws.com/image-folder/Other-Careers.mp4"
        />
    );
}

export default OtherCareers;
