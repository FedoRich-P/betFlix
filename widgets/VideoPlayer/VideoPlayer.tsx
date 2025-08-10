import { useEffect, useState } from 'react';
import styles from './VideoPlayer.module.scss'
import classNames from 'classnames';

export function VideoPlayer() {
  const [scriptHtml, setScriptHtml] = useState('');


  useEffect(() => {
    const dataUrl = window.location.href;

    fetch(`${import.meta.env.VITE_VIDEO_URL}${dataUrl}`)
      .then(res => res.text())
      .then(data => {
        const matches = data.match(/<iframe.*<\/iframe>/gm);
        if (matches && matches.length > 1) {
          setScriptHtml(matches[1]);
        } else if (matches && matches.length > 0) {
          setScriptHtml(matches[0]);
        } else {
          console.warn('No iframe found in response');
        }
      })
      .catch(error => {
        console.error('Failed to fetch video iframe:', error);
      });
  }, []);

  return (
    <div className={classNames("uitools", styles.video)} id="videoplayers" dangerouslySetInnerHTML={{ __html: scriptHtml }}></div>

  );
};

// https://pleer.videoplayers.club/player/getCode