import { Banner, Header, Options, Partners } from "components";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Banner />
        <Partners />
        <Options />
      </main>
    </div>
  );
}