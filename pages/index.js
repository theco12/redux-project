import AppLayout from "../components/applayout";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>NodeBird</title>
      </Head>
      <AppLayout>
        <div>Home page</div>
      </AppLayout>
    </>
  );
};

export default Home;
