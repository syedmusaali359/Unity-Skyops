import React from "react";
import UnityApp from '../components/UnityApp'
function HealthyRelationship() {
  return (
    <UnityApp
      loaderUrl="https://stickball.s3.amazonaws.com/healthy-relationships/healthy-relationships.loader.js"
      dataUrl="https://stickball.s3.amazonaws.com/healthy-relationships/healthy-relationships.data"
      frameworkUrl="https://stickball.s3.amazonaws.com/healthy-relationships/healthy-relationships.framework.js"
      codeUrl="https://stickball.s3.amazonaws.com/healthy-relationships/healthy-relationships.wasm"
      title="Healthy Relationships"
      vidUrl=""
    />
  );
}

export default HealthyRelationship;
