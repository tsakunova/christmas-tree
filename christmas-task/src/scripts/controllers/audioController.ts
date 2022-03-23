import { AUDIO_SRC } from '../constants/constants';
import { audioTrack, menuMuteBtn } from '../selectors/selectors';
import ls from '../services/lsService';

class AudioViews {
    private audio: HTMLAudioElement;

    constructor() {
        this.audio = audioTrack();
    }

    audioTrack() {
        this.audio.src = AUDIO_SRC;
    }
    startAudio = (isPlay: boolean) => {
        if (isPlay) {
            this.audioTrack();
            this.audio.play();
        }
    };

    toggleMute() {
        if (!ls.getIsPlayMusic()) {
            this.audio.muted = false;
        } else if (ls.getIsPlayMusic()) {
            this.audio.muted = true;
        }
        ls.setIsPlayMusic(!ls.getIsPlayMusic());
        this.muteStyle();
    }

    muteStyle() {
        const iconMute = !ls.getIsPlayMusic()
            ? 'url(assets/svg/mute-off.svg) 50% 50%/contain no-repeat'
            : 'url(assets/svg/audio.svg) 50% 50%/contain no-repeat';
        menuMuteBtn().style.background = iconMute;
    }

    audioListner = () => {
        this.startAudio(!ls.getIsPlayMusic());
        this.toggleMute();
    };

    stopPlay = () => {
        this.audio.pause();
    };
}
export default new AudioViews();
