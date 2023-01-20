import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function (currentTime) {
    localStorage.setItem('videoplayer-current-time', currentTime.seconds);
  }, 1000)
);
const currentTime = localStorage.getItem('videoplayer-current-time') || 0;
player.setCurrentTime(currentTime);
