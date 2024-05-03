import axios from "axios";
// JeetMeter.tsx
import React, { useState } from "react";

interface Holder {
  walletAddress: string;
  percentageOfOwnership: number;
}

interface CryptoData {
  projectName: string;
  tickerSymbol: string;
  TotalLiquidity: string;
  ProjectDescription: string;
  holders: Holder[];
}

const JeetMeter: React.FC = () => {
  const [contractAddress, setContractAddress] = useState("");
  const [data, setData] = useState<CryptoData | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/crypto-data", {
        contractAddress,
      });
      setData(response.data); // Assuming the API response structure matches the CryptoData interface
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="jeet-meter">
      {!data ? (
        <form onSubmit={handleSubmit}>
          <h1>Jeet Meter</h1>
          <label htmlFor="contractAddress">Enter Contract Address</label>
          <input
            id="contractAddress"
            type="text"
            value={contractAddress}
            onChange={(e) => setContractAddress(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="crypto-data">
          <h1>
            {data.projectName} ({data.tickerSymbol})
          </h1>
          <p>Total Liquidity: {data.TotalLiquidity}</p>
          <p>Project Description: {data.ProjectDescription}</p>
          <ul>
            {data.holders.map((holder, index) => (
              <li key={index}>
                Wallet Address: {holder.walletAddress}, Ownership:{" "}
                {holder.percentageOfOwnership}%
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default JeetMeter;
