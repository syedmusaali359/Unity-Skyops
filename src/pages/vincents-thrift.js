import React from "react";
import UnityApp from '../components/UnityApp'
function VincentsThrift() {
    return (
        <UnityApp
            loaderUrl="https://stickball.s3.amazonaws.com/st-vincent-thrifts/st.-vincents-thrift.loader.js"
            dataUrl="https://stickball.s3.amazonaws.com/st-vincent-thrifts/st.-vincents-thrift.data"
            frameworkUrl="https://stickball.s3.amazonaws.com/st-vincent-thrifts/st.-vincents-thrift.framework.js"
            codeUrl="https://stickball.s3.amazonaws.com/st-vincent-thrifts/st.-vincents-thrift.wasm"
            title="St. Vincents Thrift"
            vidUrl=""
        />
    );
}

export default VincentsThrift;
