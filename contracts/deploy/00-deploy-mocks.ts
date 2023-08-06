//import

import { network } from 'hardhat';
import { developmentChains } from '../helper-hardhat-config';

async function deployFunction({ getNamedAccounts, deployments }) {
   const { deploy, log } = deployments;
   const { deployer } = await getNamedAccounts();

   if (developmentChains.includes(network.name)) {
      log('Local network detected! Deploying mocks...');
      await deploy('EntryPoint', {
         contract: 'EntryPoint',
         from: deployer,
         log: true,
      });
      log('Mocks deloyed!');
      log('------------------------------------------------------------');
   }
}

const tags = ['all', 'mocks'];
deployFunction.tags = tags;

export default deployFunction;
