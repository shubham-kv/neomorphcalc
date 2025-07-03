import packageJson from '../package.json';

export function generateMetadata({title}: {title: string}) {
  const { description, author } = packageJson;
  const applicationName = import.meta.env.VITE_APP_TITLE;

  return {
    title,
    description,
    applicationName,
    author,
    titleTemplate: `%s | ${applicationName}`,
    openGraph: {
      title: `${title} | ${applicationName}`,
      description,
      type: 'website',
      url: import.meta.env.BASE_URL,
      siteName: applicationName,
    },
  };
}
