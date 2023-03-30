import mongoose from 'mongoose'

const UserSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true, minlength: 3, maxlength: 30 },
    lastName: { type: String, required: true, minlength: 3, maxlength: 30 },
    email: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 300,
    },
    password: { type: String, minlength: 3, maxlength: 1024, required: true },
    phone: { type: String, minlength: 11, maxlength: 15, required: true },
    agreement: { type: Boolean, default: false, required: true },
    rememberMe: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
)

export default mongoose.model('User', UserSchema)
