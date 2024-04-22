import { Unity, useUnityContext } from "react-unity-webgl";
import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Video from './Video'
import "../App.css";
function UnityApp({
    loaderUrl,
    dataUrl,
    frameworkUrl,
    codeUrl,
    title,
    vidUrl
}) {
    const { unityProvider, requestFullscreen, loadingProgression, isLoaded } = useUnityContext({
        loaderUrl,
        dataUrl,
        frameworkUrl,
        codeUrl,
    });
    function handleClickEnterFullscreen() {
        requestFullscreen(true);
    }
    let windowWidth = window.innerWidth
    return (
        <div className="container App">
            <h1>{title}</h1>
            <div>
                {!isLoaded &&
                    <>
                        <p className="loading-text">Loading {title}...</p>
                        <ProgressBar className="progress-container" variant="success" now={Math.round(loadingProgression * 100)} label={`${Math.round(loadingProgression * 100)}%`} style={{ width: '50%', position: 'relative', left: '50%', transform: 'translateX(-50%)' }} />
                        {vidUrl && <Video src={vidUrl} />}
                    </>

                }
                <button onClick={handleClickEnterFullscreen}
                    className="full-screen-button"
                    style={{ visibility: isLoaded ? "visible" : "hidden", }}
                >Full Screen</button>
                <br />
                <br />
                <Unity
                    unityProvider={unityProvider}
                    style={{
                        visibility: isLoaded ? "visible" : "hidden",
                        width: windowWidth > 800 ? 1024 : 700,
                        height: 'auto',
                        borderRadius: '15px'
                    }}
                />
            </div>
        </div>

    );
}

export default UnityApp;
