import SDK from '@linkdrop/sdk'
import { ethers } from 'ethers'

require('dotenv').config()

class LinkdropService {
  constructor () {
    this.sdk = new SDK({
      claimHost: process.env.CLAIM_HOST,
      linkdropMasterAddress: new ethers.Wallet(
        process.env.LINKDROP_MASTER_PRIVATE_KEY
      ).address,
      factoryAddress: process.env.FACTORY_ADDRESS,
      chain: process.env.CHAIN
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
