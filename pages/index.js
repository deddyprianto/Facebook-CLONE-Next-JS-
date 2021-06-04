import Head from "next/head";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Login from "../components/Login";
import { getSession } from "next-auth/client";
import Feed from "../components/Feed";
import Widget from "../components/Widget";

export default function Home({ session }) {
  if (!session) return <Login />;
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook Clone</title>
        <meta name="description" content="Clone Facebook App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex">
        <Sidebar />
        <Feed />
        <Widget />
      </main>
    </div>
  );
}
export async function getServerSideProps(context) {
  // get user Login
  const session = await getSession(context);
  return { props: { session } };
}
