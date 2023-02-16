//this needs to serve up an api endpoint that returns some amount of monehy
import { NextApiRequest, NextApiResponse } from "next";
import { ethers } from "ethers";

const amount = ethers.utils.parseEther("0.001");

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  response.status(200).json({ amount: ethers.utils.formatEther(amount) });
}
