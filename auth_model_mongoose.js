// Import dependencies
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://parulsatyam300:satyamkumar@cluster0.qo2qz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

// Define User Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: [3, 'Name must be at least 3 characters long']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long']
    }
}, {
    timestamps: true
});

// Create User Model
const User = mongoose.model('User', userSchema);

// Example function to register a user
async function registerUser(name, email, password) {
    try {
        const newUser = new User({ name, email, password });
        await newUser.save();
        console.log('User registered successfully:', newUser);
    } catch (err) {
        console.error('Error registering user:', err);
    }
}

// Example function to log in a user
async function loginUser(email, password) {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            console.log('User not found');
            return;
        }

        // Password validation (basic example, should use bcrypt in production)
        if (user.password !== password) {
            console.log('Incorrect password');
            return;
        }

        console.log('User logged in successfully:', user);
    } catch (err) {
        console.error('Error logging in user:', err);
    }
}

// Export User model
module.exports = { User, registerUser, loginUser };
