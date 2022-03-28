import React from 'react';

export const ReCaptchaScript = () => (
  <>
    <link rel="dns-prefetch" href="https://www.google.com" />
    <link rel="preconnect" href="https://www.google.com" />
    <link rel="preload" href="https://www.google.com/recaptcha/api.js" as="script" />
    <script defer src="https://www.google.com/recaptcha/api.js" />
  </>
);
