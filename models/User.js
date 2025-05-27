
// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   phone: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   otp: String,
//   otpExpires: Date, // ⬅️ Add this line for OTP expiry check
//   role: {
//     type: String,
//     enum: ['job_seeker', 'employer'],
//     default: null
//   }
// });

// module.exports = mongoose.model('User', userSchema);







// models/User.js
// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   phone: { type: String, required: true, unique: true },
//   // otp: String,
//   // otpExpires: Date,
//   role: {
//     type: String,
//     enum: ['job_seeker', 'employer'],
//     default: null
//   },
//   name: String,
//   gender: String,
//   dob: Date,
//   maritalStatus: String,
//   email: String,
//   address: String,
//   profileImage: String
// }, { timestamps: true });

// module.exports = mongoose.model('User', userSchema);



const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    enum: ['job_seeker', 'employer'],
    default: 'job_seeker'
  },
  name: String,
  dob: Date,
  gender: {
    type: String,
    enum: ['male', 'female', 'other']
  },
  email: String,
  industry: String,
  jobProfile: String,
  address: String,
  state: String,
  city: String,
  pincode: String,
   hoursWorked: { type: Number, default: 0 },
  totalEarnings: { type: Number, default: 0 },
  completedJobs: { type: Number, default: 0 },
  // // Optional fields for OTP login (already there)
  otp: String,
  otpExpires: Date
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);


// 6830416b4d12f7a3b5d91635

// {
  // "phone": "9886523210",
  // "role": "job_seeker",
  // "name": "Rahul Sharma",
  // "dob": "2000-05-15",
  // "gender": "male",
  // "email": "rahul@example.com",
  // "industry": "IT",
  // "jobProfile": "Frontend Developer",
  // "address": "123 Main Street",
  // "state": "Maharashtra",
  // "city": "Mumbai",
  // "pincode": "400001",
  // "hoursWorked": 120,
  // "totalEarnings": 50000,
  // "completedJobs": 10
  // }

