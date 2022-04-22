import { Banner, Case, Featured, Header, NewAdded, Options, Partners, Solution } from "components";
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
        <Featured />
        <Solution/>
        <NewAdded/>
        <Case/>
      </main>
    </div>
  );
}
