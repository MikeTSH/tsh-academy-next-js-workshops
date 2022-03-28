import Head from 'next/head';

type MetaTagsProps = {
  config: {
    title: string;
    url: string;
    image?: string;
    description: string;
  };
};

export const MetaTags = ({ config }: MetaTagsProps) => {
  return (
    <Head>
      {/* Meta tags */}
      <title>{config.title}</title>
      <meta name="description" content={config.description} />
      <link rel="canonical" href={`${process.env.NEXT_PUBLIC_HOST_NAME}${config.url}`} />
      <meta name="robots" content="index, follow" />
      {/* Open Graph meta tags */}
      <meta property="og:title" content={config.title} />
      <meta property="og:url" content={`${process.env.NEXT_PUBLIC_HOST_NAME}${config.url}`} />
      <meta property="og:image" content={config.image} />
      <meta property="og:description" content={config.description} />
      <meta property="og:site_name" content="Awesome store" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:type" content="website" />
      {/* Twitter meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={config.title} />
      <meta name="twitter:description" content={config.description} />
      <meta name="twitter:image" content={config.image} />
    </Head>
  );
};
