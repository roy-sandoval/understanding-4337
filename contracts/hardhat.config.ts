import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import 'hardhat-deploy';
const config: HardhatUserConfig = {
   solidity: {
      version: '0.8.19',
      settings: {
         optimizer: {
            enabled: true,
            runs: 1000,
         },
      },
   },
   defaultNetwork: 'hardhat',
   networks: {},
   namedAccounts: {
      deployer: {
         default: 0,
      },
      user: {
         default: 1,
      },
   },
};

export default config;
