import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { AddressInput } from "~~/components/scaffold-eth";
import { useTransactor } from "~~/hooks/scaffold-eth";
import { ethers } from "ethers";

const Home: NextPage = () => {
  const [toAddress, setToAddress] = React.useState<string>("");
  const tx = useTransactor();

  return (
    <>
      <Head>
        <title>Scaffold-eth App</title>
        <meta name="description" content="Created with 🏗 scaffold-eth" />
      </Head>

      <div className="flex items-center flex-col flex-grow pt-10">HELLO WORLD</div>

      <div className="flex items-center flex-col flex-grow pt-10">
        <AddressInput onChange={address => setToAddress(address)} value={toAddress} placeholder="Enter an address" />
      </div>
      <div className="flex items-center flex-col flex-grow pt-10">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={async () => {
            const response = await fetch("/api/getAmount");
            const amountJson = await response.json();
            console.log("amount", amountJson);

            await tx({
              to: toAddress,
              value: ethers.utils.parseEther(amountJson.amount),
            });
          }}
        >
          Send
        </button>
      </div>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </>
  );
};

export default Home;
