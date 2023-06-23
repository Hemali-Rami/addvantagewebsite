import "@/styles/globals.css";
import Layout from "@/components/common/Layout";
import AOSWrapper from "@/components/common/AOSanimation";
export default function App({ Component, pageProps }) {
  return (
    <>
      <AOSWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AOSWrapper>
    </>
  );
}
