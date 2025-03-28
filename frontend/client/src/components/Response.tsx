import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';

interface VideoSource {
  response: string
}

const Response = ({ response }: VideoSource) => {
  return (
    <div className='lg:w-[720px]'>
      <MediaPlayer aspectRatio='16/9' loop src={response}>
        <MediaProvider />
        <DefaultVideoLayout icons={defaultLayoutIcons} />
      </MediaPlayer>
    </div>
  )
}

export default Response