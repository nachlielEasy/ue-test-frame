// import "@/styles/globals.css";
import type { AppProps } from "next/app";

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }
import Image from "next/image";

export default function App() {
  return (
    <>
      <h1 id="id_for_universal_embedder_e2e_test">My Homepage</h1>
      {/* <Image
        id="id_for_universal_embedder_e2e_test"
        src="/../public/Profile.png"
        alt="Picture of the author"
        width={500}
        height={500}
      /> */}
      <p>Welcome to my homepage!</p>
    </>
  );
}
