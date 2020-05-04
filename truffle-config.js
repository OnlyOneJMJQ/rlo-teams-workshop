const HDWalletProvider = require("@truffle/hdwallet-provider");
const teamsMnemonic = "custom buzz situate mesh cannon number grass improve iron swim pilot cool";

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*'
    },
    teams: {
      provider: function() {
        return new HDWalletProvider(teamsMnemonic, "https://sandbox.truffleteams.com/ac98e539-140d-498e-818e-8284eee9d933", 0, 10, false);
      },
      network_id: 1583853263114
    }
  }
};