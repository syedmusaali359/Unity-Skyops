import React from "react";
import UnityApp from '../components/UnityApp'
function Investing() {
    return (
        <UnityApp
            loaderUrl="https://stickball.s3.amazonaws.com/investing/investing.loader.js"
            dataUrl="https://stickball.s3.amazonaws.com/investing/investing.data"
            frameworkUrl="https://stickball.s3.amazonaws.com/investing/investing.framework.js"
            codeUrl="https://stickball.s3.amazonaws.com/investing/investing.wasm"
            title="Investing"
            vidUrl="https://stickball.s3.amazonaws.com/stickball-investing.mp4"
        />
    );
}
export default Investing;
