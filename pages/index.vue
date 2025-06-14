<template>
  <div class="container">
    <p>Connected: {{ isConnected }}</p>
    <p>Address: {{ address }}</p>
    <p>Chain ID: {{ chainId }}</p>
    <p>Status: {{ status }}</p>

    <br />
    <br />
    
    <!-- Input for ENS name -->
    <input type="text" v-model="ensName" />
    <button @click="fetchAddress">Get ENS Owner Address</button>
    <p>ENS Owner Address: {{ ensAddress }}</p>

    <br />
    <br />

    <ConnectButton color="btn-primary me-2" />
    
    <button @click="disconnect" class="btn btn-primary">Disconnect</button>
    <br />
    <br />
    <NuxtLink to="/about" class="btn btn-primary">About</NuxtLink>
  </div>
</template>

<script>
import ConnectButton from '~/components/ConnectButton.vue';
import { getEnsOwnerAddress } from '~/utils/ens';

export default {
  name: 'Home',

  components: {
    ConnectButton,
  },

  data() {
    return {
      ensName: '',
      ensAddress: '',
    }
  },

  methods: {
    async fetchAddress() {
      this.ensAddress = await getEnsOwnerAddress(this.ensName);
    }
  },

  setup() {
    const { address, chainId, isConnected, status } = useAccount()
    const config = useConfig()
    const { disconnect } = useDisconnect()

    return {
      address,
      chainId,
      config,
      disconnect,
      isConnected,
      status,
    }
  },
}
</script>