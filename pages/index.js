import {
  Banner,
  Case,
  Featured,
  Header,
  Neighborhood,
  NewAdded,
  Options,
  Partners,
  Solution,
  Articles,
  Blog,
  Footer,
} from "components";
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
        <Solution />
        <NewAdded />
        <Case />
        <Neighborhood />
        <Articles />
        <Blog />
        <Footer />
      </main>
    </div>
  );
}
