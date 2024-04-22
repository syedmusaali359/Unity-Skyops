import React from "react";
import UnityApp from '../components/UnityApp'
function BrooklineBank() {
    return (
        <UnityApp
            loaderUrl="https://stickball.s3.amazonaws.com/brookline-bank/brookline-bank/brookline-bank.loader.js"
            dataUrl="https://stickball.s3.amazonaws.com/brookline-bank/brookline-bank/brookline-bank.data"
            frameworkUrl="https://stickball.s3.amazonaws.com/brookline-bank/brookline-bank/brookline-bank.framework.js"
            codeUrl="https://stickball.s3.amazonaws.com/brookline-bank/brookline-bank/brookline-bank.wasm"
            title="Brookline Bank"
            vidUrl="https://stickball.s3.amazonaws.com/brookline-bank/brookline-bank/brookline-bank.mp4"
        />
    );
}
export default BrooklineBank;
