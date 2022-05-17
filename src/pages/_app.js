import styles from 'antd/dist/antd.css';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp