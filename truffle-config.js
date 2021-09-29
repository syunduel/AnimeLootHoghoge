const path = require("path");

const HDWalletProvider = require('@truffle/hdwallet-provider');

const mnemonic_ganache = process.env["MNEMONIC_GANACHE"];
const mnemonic_rinkeby = process.env["MNEMONIC_RINKEBY"];

const project_id = process.env["ALPC_INFURA_PROJECT_ID"];
const rinkeby_infura_url_http = "https://rinkeby.infura.io/v3/" + project_id;
const rinkeby_infura_url_wss = "wss://rinkeby.infura.io/ws/v3/" + project_id;

const etherscan_api_key = process.env["ETHERSCAN_API_KEY"];

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),

  api_keys: {
    etherscan: etherscan_api_key
  },

  plugins: [
    'truffle-plugin-verify'
  ],
  networks: {

    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },

    rinkeby1: {
      provider: function() { 
        return new HDWalletProvider(mnemonic_rinkeby, rinkeby_infura_url_http);
      },
      network_id: 4,
      gas: 6698712,
      gasPrice: 45000000000,
      networkCheckTimeout: 1000000,
      timeoutBlocks: 5000,
      skipDryRun: true,
      websocket: false,
    },

    
    rinkeby2: {
      provider: function() { 
        return new HDWalletProvider(mnemonic_rinkeby, rinkeby_infura_url_wss);
      },
      network_id: 4,
      gas: 5000000,
      gasPrice: 45000000000,
      confirmations: 2,
      skipDryRun: true,
      websocket: true,
      timeoutBlocks: 50000,
      networkCheckTimeout: 1000000

      // from - default address to use for any transaction Truffle makes during migrations
      // provider - web3 provider instance Truffle should use to talk to the Ethereum network.
      //          - function that returns a web3 provider instance (see below.)
      //          - if specified, host and port are ignored.
      // skipDryRun: - true if you don't want to test run the migration locally before the actual migration (default is false)
      // confirmations: - number of confirmations to wait between deployments (default: 0)
      // timeoutBlocks: - if a transaction is not mined, keep waiting for this number of blocks (default is 50)
      // deploymentPollingInterval: - duration between checks for completion of deployment transactions
      // disableConfirmationListener: - true to disable web3's confirmation listener

    },

  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },
  
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.7",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200
        },
        //  evmVersion: "byzantium"
      },
    },

    // solc: {
    //   version: "^0.8.0"
      // version: "0.5.1",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    // }
  },
};
