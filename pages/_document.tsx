import React, { ReactNode } from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import createEmotionCache from '../src/styles/createEmotionCache';
import { getStyleTags } from '../src/styles/getStyleTags';

export default class MyDocument extends Document<{ emotionStyleTags: ReactNode[] }> {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* TODO[PERF-1]: Optimize font */}
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="icon" type="image/png" href="/favicon.ico" sizes="32x32" />
          {this.props.emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (context) => {
  const originalRenderPage = context.renderPage;

  context.renderPage = () => {
    return originalRenderPage({
      enhanceApp: (App: any) => {
        return function EnhancedAppComponent(props) {
          return <App emotionCache={createEmotionCache()} {...props} />;
        };
      },
    });
  };

  const initialProps = await Document.getInitialProps(context);

  return {
    ...initialProps,
    emotionStyleTags: getStyleTags(initialProps.html),
  };
};
