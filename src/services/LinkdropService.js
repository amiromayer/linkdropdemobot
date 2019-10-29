import { LinkdropSDK } from '@linkdrop/sdk'
import { ethers } from 'ethers'
require('dotenv').config()

class LinkdropService {
  constructor () {
    this.sdk = new LinkdropSDK({
      linkdropMasterAddress: process.env.LINKDROP_MASTER_ADDRESS,
      chain: process.env.CHAIN,
      jsonRpcUrl: process.env.JSON_RPC_URL,
      factoryAddress: process.env.LINKDROP_FACTORY_ADDRESS,
      claimHost: process.env.CLAIM_HOST
    })
  }

  async generateLink () {
    return this.sdk.generateLink({
      signingKeyOrWallet: process.env.LINKDROP_MASTER_PRIVATE_KEY,
      weiAmount: process.env.WEI_AMOUNT,
      tokenAddress: process.env.TOKEN_ADDRESS,
      tokenAmount: process.env.TOKEN_AMOUNT,
      expirationTime: process.env.EXPIRATION_TIME,
      campaignId: process.env.CAMPAIGN_ID
    })
  }
}

export default new LinkdropService()
