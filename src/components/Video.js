import React, { useState, useEffect, useRef } from 'react'
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import IconButton from '@mui/material/IconButton';

export default function Video({ src }) {


    const [muted, setMuted] = useState(false)

    const videoEl = useRef(null);

    const attemptPlay = () => {
        if (videoEl && videoEl.current) {
            videoEl.current.play()

        }
    };
    useEffect(() => {
        attemptPlay();
    }, [videoEl.current]);
    return (
        <>
            <div style={{ width: 'fit-content', position: 'relative' }}>
                <video
                    playsInline
                    loop
                    muted={!muted}
                    controls={false}
                    alt="All the devices"
                    // src="https://stream.mux.com/6fiGM5ChLz8T66ZZiuzk1KZuIKX8zJz00/medium.mp4"
                    ref={videoEl}
                    src={src}
                >

                </video>
                <IconButton onClick={() => setMuted(!muted)}
                    style={{
                        position: 'absolute',
                        right: 90,
                        top: 50,
                        backgroundColor: 'rgba(1000,1000,1000,0.7)',
                    }}
                >
                    {
                        muted ?
                            <VolumeUpIcon />
                            :
                            <VolumeOffIcon />
                    }
                </IconButton>

            </div>
        </>
    )
}
