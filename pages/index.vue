<template>
  <div class="container">
    <p>Connected: {{ isConnected }}</p>
    <p>Address: {{ address }}</p>
    <p>Chain ID: {{ chainId }}</p>
    <p>Status: {{ status }}</p>

    <ConnectButton color="btn-primary" />
    <TestConnectButton color="btn-primary" />
    
    <button @click="disconnect" class="btn btn-primary">Disconnect</button>
    <br />
    <br />
    <NuxtLink to="/about" class="btn btn-primary">About</NuxtLink>
  </div>
</template>

<script>
import ConnectButton from '~/components/ConnectButton.vue';
import TestConnectButton from '@/components/TestConnectButton.vue';

export default {
  name: 'Home',

  components: {
    ConnectButton,
    TestConnectButton,
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