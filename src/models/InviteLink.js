import { Schema, model } from 'mongoose'

const inviteLinkSchema = new Schema({
  userId: { type: String, required: true, unique: true },
  linkId: { type: String, required: true },
  linkKey: { type: String, required: true },
  url: { type: String, required: true }
})

const InviteLink = model('InviteLink', inviteLinkSchema)

export default InviteLink
