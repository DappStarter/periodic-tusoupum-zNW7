require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog olympic tell educate ranch remind modify inflict knife foster twist'; 
let testAccounts = [
"0x2c27acb02264e09b866c28218618d5eb0635cac31c539cc04a4910c5b1991d9b",
"0xe61dd1542fe4fd0cae8e487159a9c3d7ec043a211c18c5a57023b3a2a8be867b",
"0x315c14dd1064f941c2094db0215fc3e3ae702fd4dc9c368b3934607b338ff64e",
"0xe9db29562f79ee8bc696cb4b72eda317dc3983f75d50d7614852c852ddeedbb3",
"0x439654a29a7fa61c7a7e785f33eccfabf15990aacfe144a1ca3473456e4ab36b",
"0x7839a1400bfbb7679c064285d62956b22583214e90a7f0673c3bb8d1c8572b9f",
"0xd16bd5daf60bd05977537f01c5386fc69667b243d4034e6d8661700758ad9da4",
"0x790d4218273fb4f19bff600f54d7fa5cb9d65bbfe2d652feeebac96b145ce37b",
"0xc5897343f61cb813d10d975361273c4ae5e71c7e5a7b91700dab36920a0f95bf",
"0x0e4336a7d33150d09a61079b488304b87c69e73fffea2e96a83b52bf5302deb6"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

