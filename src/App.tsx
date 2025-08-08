import { Helmet } from 'react-helmet-async';
import { CalculatorUi } from '@/components';
import { generateMetadata } from './metadata';
import styles from './app.module.css';

const meta = generateMetadata({ title: 'Home' });

export function App() {
  return (
    <>
      <Helmet titleTemplate={meta.titleTemplate}>
        <title>{meta.title}</title>
        <meta name='description' content={meta.description} />
        <meta name='author' content={meta.author} />
        <meta name='application-name' content={meta.applicationName} />
        <meta property='og:title' content={meta.openGraph.title} />
        <meta property='og:description' content={meta.openGraph.description} />
        <meta property='og:type' content={meta.openGraph.type} />
        <meta property='og:url' content={meta.openGraph.url} />
        <meta property='og:site_name' content={meta.openGraph.siteName} />
      </Helmet>

      <div className={styles.app}>
        <CalculatorUi />
      </div>
    </>
  );
}
