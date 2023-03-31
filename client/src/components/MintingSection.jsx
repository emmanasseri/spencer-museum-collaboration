import React, { useState } from "react";
import PaperWalletGenerator from "../ABI/PaperWalletGenerator.json";
const { ethers } = require("ethers");

//const contract = new ethers.Contract(contractAddress, myContractAbi, provider);


function MintingSection() {
  const [privateKeys, setPrivateKeys] = useState([]);
  const [publicKeys, setPublicKeys] = useState([]);

  async function generateWallets() {
    console.log("Generating wallets...");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(PaperWalletGenerator.address, PaperWalletGenerator.abi, signer);
    console.log("Contract: ", contract);
    const [pKeys, pubKeys] = await contract.generateWallets();
    setPrivateKeys(pKeys);
    setPublicKeys(pubKeys);
    console.log("Public Keys: ", pubKeys);
    console.log("Private Keys: ", pKeys);
  }

  return (
    <div>
      <button onClick={generateWallets}>Generate Wallets</button>
      {privateKeys.length > 0 && (
        <div>
          <h2>Private Keys:</h2>
          <ul>
            {privateKeys.map((key) => (
              <li>{key}</li>
            ))}
          </ul>
          <h2>Public Keys:</h2>
          <ul>
            {publicKeys.map((key) => (
              <li>{key}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MintingSection;
