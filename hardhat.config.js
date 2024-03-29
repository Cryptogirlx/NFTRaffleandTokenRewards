require("@nomiclabs/hardhat-waffle");

require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.11",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
            details: {
              yul: true,
            },
          },
          viaIR: false,
        },
      },
    ],
  },
  loggingEnabled: true,
  defaultNetwork: "hardhat",
  networks: {
    localhost: {
      url: "http://localhost:8545",
    },
    hardhat: {
      forking: {
        url: `https://mainnet.infura.io/v3/${process.env.INFURA_API}`,
      },
      accounts: {
        accountsBalance: "1000000000000000000000000", //1 million ETH to signers
      },
    },
    mainnet: {
      url: `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API}`,
      accounts: [`${process.env.MAINNET_DEPLOYER_PRIV_KEY}`],
    },
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API}`,
      accounts: [`${process.env.GOERLI_DEPLOYER_PRIV_KEY}`],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  mocha: {
    timeout: 120000,
  },
};
