import React, { ReactNode } from "react";
import Head from "next/head";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Head>
        <title>Greenlabs-fms 신규입사자 과제</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>{children}</>
    </div>
  );
};

export default Container;