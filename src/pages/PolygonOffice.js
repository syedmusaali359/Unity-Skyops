import React from "react";
import UnityApp from '../components/UnityApp'
function PolygonOffice() {
    return (
        <UnityApp
            loaderUrl="https://stickball.s3.amazonaws.com/Polygon-office/polygon-office.loader.js"
            dataUrl="https://stickball.s3.amazonaws.com/Polygon-office/polygon-office.data"
            frameworkUrl="https://stickball.s3.amazonaws.com/Polygon-office/polygon-office.framework.js"
            codeUrl="https://stickball.s3.amazonaws.com/Polygon-office/polygon-office.wasm"
            title="Stickball Office"
            vidUrl="https://stickball.s3.amazonaws.com/image-folder/Polygon+Office_Intro.mp4"
        />
    );
}

export default PolygonOffice;
