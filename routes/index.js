const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// Multer config for file uploads
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// Home page
router.get('/', (req, res) => {
  res.render('home', { title: 'Express' });
});

router.get('/about', (req, res) => {
  res.render('about', { title: 'About StudyPerks' });
});


// Handle student verification form
router.post('/verify', upload.single('studentCard'), (req, res) => {
  const wallet = req.body.walletAddress;
  const file = req.file;

  console.log('Wallet Address:', wallet);
  console.log('Uploaded File Path:', file.path);

  // Future: Call smart contract mint function here
  res.send("Your verification has been received. Token will be issued shortly.");
});

module.exports = router;
