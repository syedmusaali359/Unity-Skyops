import React from "react";
import UnityApp from '../components/UnityApp'
function PassumpsicBank() {
    return (
        <UnityApp
            loaderUrl="https://stickball.s3.amazonaws.com/passumpsic-bank/passumpsic-bank/passumpsic-bank.loader.js"
            dataUrl="https://stickball.s3.amazonaws.com/passumpsic-bank/passumpsic-bank/passumpsic-bank.data"
            frameworkUrl="https://stickball.s3.amazonaws.com/passumpsic-bank/passumpsic-bank/passumpsic-bank.framework.js"
            codeUrl="https://stickball.s3.amazonaws.com/passumpsic-bank/passumpsic-bank/passumpsic-bank.wasm"
            title="Passumpsic Bank"
            vidUrl="https://stickball.s3.amazonaws.com/passumpsic-bank.mp4"
        />
    );
}
export default PassumpsicBank;
