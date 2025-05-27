// const Attendance = require('../models/Attendance');

// exports.markAttendance = async (req, res) => {
//   try {
//     const { date, status } = req.body;

//     const attendance = new Attendance({
//       user: req.user,  // yahi fix karo
//       date,
//       status,
//     });

//     await attendance.save();
//     res.status(201).json({ message: 'Attendance marked', attendance });
//   } catch (error) {
//     res.status(500).json({ error: 'Server error while marking attendance' });
//   }
// };

// exports.getAttendance = async (req, res) => {
//   try {
//     const userId = req.params.userId;
//     const records = await Attendance.find({ user: userId });
//     res.json(records);
//   } catch (error) {
//     res.status(500).json({ error: 'Server error while fetching attendance' });
//   }
// };

const Attendance = require('../models/Attendance');

// POST /attendance/clock-in
exports.clockIn = async (req, res) => {
  const { userId } = req.body;
  try {
    const entry = new Attendance({ userId, clockInTime: new Date(), type: 'auto' });
    await entry.save();
    res.status(201).json({ message: 'Clocked in successfully', entry });
  } catch (err) {
    res.status(500).json({ message: 'Error clocking in', error: err.message });
  }
};

// GET /attendance/history?userId=123
exports.getHistory = async (req, res) => {
  const { userId } = req.query;
  try {
    const history = await Attendance.find({ userId }).sort({ createdAt: -1 });
    res.status(200).json(history);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching history', error: err.message });
  }
};

// POST /attendance/manual
exports.manualEntry = async (req, res) => {
  const { userId, clockInTime, clockOutTime, note } = req.body;
  try {
    const entry = new Attendance({
      userId,
      clockInTime: new Date(clockInTime),
      clockOutTime: clockOutTime ? new Date(clockOutTime) : null,
      note,
      type: 'manual',
    });
    await entry.save();
    res.status(201).json({ message: 'Manual entry saved', entry });
  } catch (err) {
    res.status(500).json({ message: 'Error saving manual entry', error: err.message });
  }
};

// PUT /attendance/update/:id
exports.updateEntry = async (req, res) => {
  const { id } = req.params;
  const { clockInTime, clockOutTime, note } = req.body;
  try {
    const updated = await Attendance.findByIdAndUpdate(id, {
      clockInTime,
      clockOutTime,
      note
    }, { new: true });
    if (!updated) return res.status(404).json({ message: 'Entry not found' });
    res.json({ message: 'Entry updated', updated });
  } catch (err) {
    res.status(500).json({ message: 'Error updating entry', error: err.message });
  }
};
