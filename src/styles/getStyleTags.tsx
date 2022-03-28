import React from 'react';
import createEmotionServer from '@emotion/server/create-instance';
import createEmotionCache from './createEmotionCache';

export function getStyleTags(html: string) {
  const cache = createEmotionCache();

  const { extractCriticalToChunks } = createEmotionServer(cache);
  const emotionStyles = extractCriticalToChunks(html);

  return emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));
}
