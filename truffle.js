module.exports = {
  build: "webpack",
  networks: {
    "mainnet": {
      network_id: 1 // Ethereum public network
    },
    "morden": {
      network_id: 2   // Official Ethereum test network
    },
    "development": {
      network_id: "default"
    }
  },
  rpc: {
    host: "localhost",
    port: 8545,
    from: '0xFa6F2D7cC987d592556ac07392b9d6395bfcc379'
  }
};
