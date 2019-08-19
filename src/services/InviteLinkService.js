import InviteLink from '../models/InviteLink'
import { LinkdropSDK } from '@linkdrop/sdk'
import linkdropService from './LinkdropService'

class InviteLinkService {
  async find (userId) {
    return InviteLink.findOne({ userId })
  }

  async getCount () {
    return InviteLink.countDocuments({})
  }

  async create (userId) {
    try {
      let {
        url,
        linkId,
        linkKey,
        linkdropSignerSignature
      } = await linkdropService.generateLink()

      url = `${url}&dappId=zrx-instant`

      const inviteLink = new InviteLink({ userId, linkId, linkKey, url })
      await inviteLink.save()
      return inviteLink
    } catch (error) {
      console.error(error)
      throw new Error(error.message)
    }
  }
}

export default new InviteLinkService()
