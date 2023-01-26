import {
  RedaniaRegionHistory,
  RedaniaRegionHistory1,
  RedaniaRegionHistory2,
  RedaniaRegionHistory3,
  RedaniaRegionHistory4,
  RedaniaRegionHistory5
} from '../components/RedaniaHistory'

import video from '../assets/video.mp4'

import Characters from '../components/Characters'

const Redania = () => {
  return (
    <>
      <div className='Redania'>
        <RedaniaRegionHistory />
        <RedaniaRegionHistory1 />
        <RedaniaRegionHistory2 />
        <RedaniaRegionHistory3 />
        <RedaniaRegionHistory4 />
        <RedaniaRegionHistory5 />
        <div className='screenScroll-down'></div>
      </div>
      <div className='screen-background'>
        <Characters characterRegion='redania' />
        <video
          id='myVideo'
          src={video}
          autoPlay={true}
          loop={true}
          muted={true}
        ></video>
      </div>
    </>
  )
}

export default Redania
