import mongoose from 'mongoose';  // Use import for mongoose

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' } // Added role field
});

const User = mongoose.model('User', userSchema);

export default User;  // Export the User model as default
