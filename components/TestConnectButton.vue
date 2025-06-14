<template>
  <button class="btn" :class="getColor" @click.stop="connectWallet">Test Connect wallet</button>
</template>

<script>
import { useChainId, useConnect } from '@wagmi/vue'

export default {
  name: "TestConnectButton",
  props: ['color'], // bg: 'btn-primary' or 'btn-dark'

  mounted() {
    console.log("TestConnectButton mounted")
    console.log("Connectors:", this.connectors)
    console.log("Connect function:", this.connect)
  },

  computed: {
    getColor() {
      return this.color || 'btn-primary'
    }
  },

  methods: {    
    async connectWallet() {
      console.log("connecting test Wallet")
      console.log("Available connectors:", this.connectors)
      try {
        if (!this.connectors || !this.connectors[1]) {
          console.error("No connectors available")
          return
        }
        await this.connect({ connector: this.connectors[1], chainId: this.chainId });
        console.log("connected test Wallet")
      } catch (error) {
        console.error("Failed to connect wallet:", error);
      }
    },
  },

  setup() {
    console.log("TestConnectButton setup")
    const chainId = useChainId()
    const { connect, connectors, error, status } = useConnect()

    return {
      chainId,
      connect,
      connectors,
      error,
      status,
    }
  }
}
</script>

