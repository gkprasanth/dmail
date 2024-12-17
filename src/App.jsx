import { ethers } from "ethers";
import { useState } from "react";

export default function App() {
  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = async () => {
    // Check if MetaMask is installed
    if (typeof window !== "undefined" && window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        // Request access to the wallet
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();

        // Get wallet address
        const address = await signer.getAddress();
        setWalletAddress(address);
        console.log("Connected Wallet Address:", address);
      } catch (error) {
        console.error("Error connecting wallet:", error);
        alert("Failed to connect wallet. Check the console for details.");
      }
    } else {
      alert("MetaMask is not installed. Please install MetaMask to use this feature.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <button
        onClick={connectWallet}
        className="text-3xl font-bold underline bg-blue-500 text-white px-4 py-2 rounded"
      >
        Connect Wallet
      </button>
      {walletAddress && (
        <p className="mt-4 text-xl">
          Connected Address: <span className="font-mono">{walletAddress}</span>
        </p>
      )}
    </div>
  );
}
