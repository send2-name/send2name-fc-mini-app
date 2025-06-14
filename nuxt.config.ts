import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@wagmi/vue/nuxt'],
  compatibilityDate: '2025-01-16',
  build: {
    transpile: ['@farcaster/frame-sdk', '@farcaster/frame-wagmi-connector']
  },
  components: false,
  runtimeConfig: {
    public: {
      blockExplorerBaseUrl: {
        10: 'https://optimistic.etherscan.io',
        42161: 'https://arbiscan.io',
      },
      chainCurrency: {
        10: 'ETH',
        42161: 'ETH',
      },
      favicon: '/img/favicon.ico',
      projectMetadataTitle: 'Send2.name | Send tokens to any web3 domain',
      projectDescription: 'Send2.name is a web3 app that allows you to send tokens to any supported web3 domain name.',
      projectUrl: 'https://fc.send2.name',
      projectTwitter: '@PunkDomains',
      previewImage: '/img/preview.png',
      supportedChains: [
        { chainId: 10, networkName: 'Optimism' },
        { chainId: 42161, networkName: 'Arbitrum' },
      ],
    }
  },
  app: {
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          charset: 'utf-8',
        },
      ],
      link: [
        {
          // Bootstrap
          rel: 'stylesheet',
          href: '/css/bootstrap.css',
        },
        {
          // Bootstrap icons
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css',
        },
        {
          // Custom
          rel: 'stylesheet',
          href: '/css/custom.css',
        },
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
        },
      ],
    },
  },
})