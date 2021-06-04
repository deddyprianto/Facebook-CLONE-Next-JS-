import Image from "next/image";
import { signIn } from "next-auth/client";
import Head from "next/head";
const Login = () => {
  return (
    <div>
      <Head>
        <title>Facebook</title>
        <meta name="description" content="Clone Facebook App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen grid place-items-center">
        <Image
          src="/img/logo.png"
          height={500}
          width={500}
          layout="fixed"
          objectFit="contain"
        />
        <h1
          onClick={signIn}
          className="p-5 bg-gray-900 rounded-lg text-white text-center cursor-pointer"
        >
          Login Pake Gmail
        </h1>
      </div>
    </div>
  );
};

export default Login;
