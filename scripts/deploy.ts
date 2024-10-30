import { Deployer, DeployFunction, Network } from '@alephium/cli';
import { Settings } from '../alephium.config';
import { TokenContract, StakingContract } from '../artifacts/ts';
import { stringToHex } from '@alephium/web3';

// This deploy function will be called by the CLI deployment tool automatically
const deployContracts: DeployFunction<Settings> = async (
  deployer: Deployer,
  network: Network<Settings>
): Promise<void> => {
  // Get settings
  const issueTokenAmount = network.settings.issueTokenAmount;

  // Deploy the TokenContract
  const tokenResult = await deployer.deployContract(TokenContract, {
    // Set the initial fields for the token contract
    initialFields: {
      name: stringToHex('Alphistake Token'), // Name of your token
      symbol: stringToHex('ASTK'),           // Symbol of your token
      decimals: 18n,                         // Number of decimal places
      supply: issueTokenAmount,              // Total supply amount
      balance: issueTokenAmount               // Initial balance for the deployer
    }
  });

  console.log('Token contract ID: ' + tokenResult.contractInstance.contractId);
  console.log('Token contract address: ' + tokenResult.contractInstance.address);

  // Deploy the StakingContract
  const stakingResult = await deployer.deployContract(StakingContract, {
    // Set the initial fields for the staking contract
    initialFields: {
      tokenAddress: tokenResult.contractInstance.address, // Address of the deployed token
      rewardRate: 100n, // Set your desired reward rate (modify as needed)
      totalStaked: 0n   // Initialize total staked amount
    }
  });

  console.log('Staking contract ID: ' + stakingResult.contractInstance.contractId);
  console.log('Staking contract address: ' + stakingResult.contractInstance.address);
};

export default deployContracts;
