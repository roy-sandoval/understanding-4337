//import

import { network } from 'hardhat';
import { developmentChains, networkConfig } from '../helper-hardhat-config';

async function deployFunction({ getNamedAccounts, deployments }) {
   const { deploy, log, get } = deployments;
   const { deployer } = await getNamedAccounts();
   const chainId = network.config.chainId;

   let entryPointAddress;

   if (developmentChains.includes(network.name)) {
      const entryPoint = await get('EntryPoint');
      entryPointAddress = entryPoint.address;
   } else {
      entryPointAddress = networkConfig[chainId]['entryPoint'];
   }

   //deploy mocks if using localhost or hardhat network
   const deployFactory = await deploy('SimpleAccountFactory', {
      from: deployer,
      log: true,
      args: [entryPointAddress],
      deterministicDeployment: false,
   });
   log('------------------------------------------------------------');
}

const tags = ['all', 'factory'];
deployFunction.tags = tags;

export default deployFunction;
