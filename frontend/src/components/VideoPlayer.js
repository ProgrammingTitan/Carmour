import React from 'react';
import ReactDOM from 'react-dom';
import QierPlayer from 'qier-player';
// 或者你可以不导入，直接放源视频的源地址
import video from '../data/video.mp4';

class VideoPlayer extends React.Component{
    render(){
        return(
            <div>
  <QierPlayer 
    width={'100%'}
    height={420}
    language="zh"
    showVideoQuality={true}
    themeColor="#abc123"
    src480p={video}
    src720p={video}
    srcOrigin={video}
  />
  </div>
);
        }
    }
export default VideoPlayer;