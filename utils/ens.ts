// utils/ens.js

import { getPublicClient } from '@wagmi/vue/actions';
import { config } from '../wagmi';
import { mainnet } from '@wagmi/vue/chains';

/**
 * Fetches the owner address for a given ENS name.
 *
 * @param {string} ensName The ENS name (e.g., "vitalik.eth").
 * @returns {Promise<string | null>} The owner address or null if not found.
 */
export async function getEnsOwnerAddress(ensName: string) {
  try {
    const publicClient = getPublicClient(config, { chainId: mainnet.id });
    
    if (!publicClient) {
      throw new Error('Public client not available');
    }

    const address = await publicClient.getEnsAddress({ name: ensName });

    if (address) {
      return address;
    } else {
      console.log(`No ENS address found for ${ensName}`);
      return null;
    }
  } catch (error) {
    console.error(`Error fetching ENS address for ${ensName}:`, error);
    return null;
  }
}
