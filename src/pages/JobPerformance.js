import React from "react";
import UnityApp from '../components/UnityApp'
import "../App.css";
function JobPerformance() {

  return (
      <UnityApp
        loaderUrl='https://stickball.s3.amazonaws.com/new-job-performance/job-performance.loader.js'
        dataUrl='https://stickball.s3.amazonaws.com/new-job-performance/job-performance.data'
        frameworkUrl='https://stickball.s3.amazonaws.com/new-job-performance/job-performance.framework.js'
        codeUrl='https://stickball.s3.amazonaws.com/new-job-performance/job-performance.wasm'
        title="Job Performance"
        vidUrl="https://stickball.s3.amazonaws.com/Job+Performance+Intro+Compressed.mp4"
      />
  );
}

export default JobPerformance;
