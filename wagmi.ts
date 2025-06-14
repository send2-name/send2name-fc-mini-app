import { farcasterFrame } from '@farcaster/frame-wagmi-connector'
import { http, cookieStorage, createConfig, createStorage } from '@wagmi/vue'
import { arbitrum, base, mainnet, optimism, polygon, zora } from '@wagmi/vue/chains'

export const config = createConfig({
  chains: [arbitrum, base, mainnet, optimism, polygon, zora],
  connectors: [
    farcasterFrame(),
  ],
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  transports: {
    [arbitrum.id]: http(),
    [base.id]: http(),
    [mainnet.id]: http(),
    [optimism.id]: http(),
    [polygon.id]: http(),    
    [zora.id]: http(),
  },
})

declare module '@wagmi/vue' {
  interface Register {
    config: typeof config
  }
}
