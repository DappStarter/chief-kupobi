require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'gloom drive flock slush stove rival script unable hard light army gas'; 
let testAccounts = [
"0x2008991292eb35a7662f1ca99a4837314aacfe47c7ee5f6145ae80a6b6801f00",
"0xa163af836560f3203162330052ab9992c7f247608e165bbf87d4d46466c93f05",
"0x071d6d11b6e0416a0d3ab73630dbb09fc4f7d5823e39f17602a7bc4553fee51c",
"0x483a1526f42138f42c40b6557445b4361bf452a02cbe0c444f660a483f00e8c5",
"0xcaa626e5c66a9393272861541a5fe3920a647d7f409df7237008c4f4279909cd",
"0x3fe8a9d10f91ea9ed0264dd1aa11a30cac1019b3fb2a8573cf3984f7d81e1d78",
"0xacc3066dd01f252d62fe24a65dcf7e44da723e53f54c8a3fbff2c4c1e0c13c76",
"0x2e9a6391948eb1df193809c7cf67face3382622804e89edfb137f889811b533f",
"0xb9e9f666fd36114e5139e5dcb3d4510eb5003bc6878617233a1b87ddb5319ad1",
"0xa96336fc819d34ee58cd7a5b8036779c1f86369479a26deb394f39c3a99c65e8"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

