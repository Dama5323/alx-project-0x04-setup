import { CountProvider } from "@/context/CountContext";

function MyApp({ Component, pageProps }) {
  return (
    <CountProvider>
      <Component {...pageProps} />
    </CountProvider>
  );
}

export default MyApp;
