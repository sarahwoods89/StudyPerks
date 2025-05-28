const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

router.get('/', function(req, res) {
  res.render('home', {
    title: 'Home',
    currentPage: 'home'
  });
});

// Multer config for file uploads
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

router.get('/about', function(req, res) {
  res.render('about', {
    title: 'About | StudyPerks',
    currentPage: 'about'
  });
});


router.get('/brands', function(req, res) {
  res.render('brands', {
    title: 'Brand Partners',
    currentPage: 'brands'
  });
});

router.get('/universities', function(req, res) {
  res.render('universities', {
    title: 'University Partners',
    currentPage: 'universities'
  });
});



router.get('/verify', function(req, res) {
  res.render('verify', {
    title: 'Verify | StudyPerks',
    currentPage: 'verify'
  });
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
