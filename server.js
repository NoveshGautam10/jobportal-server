// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const authRoutes = require('./routes/auth');
// const skillRoutes = require('./routes/skill');


// dotenv.config();

// const app = express();
// app.use(express.json());

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB Connected"))
//   .catch(err => console.log(err));

// app.use('/api/auth', authRoutes);
// app.use('/api/skill', skillRoutes);


// app.listen(process.env.PORT, () => {
//   console.log(`Server running on port ${process.env.PORT}`);
// });




// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const authRoutes = require('./routes/auth');
// const skillRoutes = require('./routes/skill');


// dotenv.config();
// const app = express();

// app.use(express.json()); // very important to parse JSON

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => console.log('MongoDB connected'))
//   .catch(err => console.error('DB connection failed', err));

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/skill', skillRoutes);

// // Server start
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads/resumes', express.static(path.join(__dirname, 'uploads/resumes')));
app.use('/uploads/profile-pics', express.static(path.join(__dirname, 'uploads/profile-pics')));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/user', require('./routes/user'));
app.use('/api/education', require('./routes/education'));
app.use('/api/experience', require('./routes/experience'));
app.use('/api/resume', require('./routes/resume'));
app.use('/api/skill', require('./routes/skill'));
app.use('/api/job', require('./routes/jobs'));
app.use('/api/attendance', require('./routes/attendance'));
app.use('/api/events', require('./routes/events'));
app.use('/api/task',  require('./routes/task'));
app.use('/api/career-preference', require('./routes/careerPreference'));
app.use('/api/application', require('./routes/application'));
app.use('/api/reviews', require('./routes/reviews'));
app.use('/api/categories', require('./routes/categories'));
app.use("/api/dashboard", require("./routes/dashboard"));

// DB connection and server start
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT || 5000, () => {
            console.log('Server is running');
        });
    })
    .catch(err => console.error('MongoDB connection error:', err));
