require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const ALCHEMY_API_KEY = "7HBaGue9O1cRQmes4QZGktK1Bm_D5CMy";
const RINKEBY_PRIVATE_KEY = "e13ac7ac718c31551e617d01f53f277ff2f9ccc7a393a858c24faed2a588802f"
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

 task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.10",
  networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${RINKEBY_PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: "UBCSGBMQKK5EUF2JQE7H1UUS96XNR4S35Y"
  }
};

