import "../styles/globals.css";
import "xp.css/dist/XP.css";
import Layout from "../layout/Layout";


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
