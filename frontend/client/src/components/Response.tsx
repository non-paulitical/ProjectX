import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
// import { MediaPlayer, MediaProvider } from '@vidstack/react';
// import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import { useEffect, useRef, useState } from 'react';

interface VideoSource {
  response: string
}

const Response = ({ response }: VideoSource) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState<string | null>(null);
  const [videoStatus, setVideoStatus] = useState<string>('Loading...');

  // Clean up blob URLs when component unmounts
  useEffect(() => {
    return () => {
      // Check if the response is a blob URL
      if (response.startsWith('blob:')) {
        URL.revokeObjectURL(response);
      }
    };
  }, [response]);

  // Force video to load when src changes
  useEffect(() => {
    if (videoRef.current) {
      setVideoStatus('Loading video...');
      setVideoError(null);
      videoRef.current.load();
    }
  }, [response]);

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    setVideoError(`Error loading video: ${video.error?.message || 'Unknown error'}`);
    setVideoStatus('Failed');
    console.error('Video error:', video.error);
  };

  const handleVideoLoadedData = () => {
    setVideoStatus('Loaded');
    setVideoError(null);
  };

  return (
    <div className='lg:w-[720px]'>
      <video 
        ref={videoRef} 
        controls 
        autoPlay={false} 
        preload="auto" 
        className="w-full"
        onError={handleVideoError}
        onLoadedData={handleVideoLoadedData}
      >
        <source src={response} type='video/mp4' />
        Browser does not support video.
      </video>
      
      <div className="mt-2 text-sm">
        <p>Video status: {videoStatus}</p>
        {videoError && (
          <p className="text-red-500">{videoError}</p>
        )}
        <p className="text-xs text-gray-500 mt-1">Source: {response}</p>
      </div>
    </div>
  )
}

export default Response
