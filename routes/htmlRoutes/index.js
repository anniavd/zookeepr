const path = require('path');
const router = require('express').Router();



// connect the html  index with the server
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });
  
  // connect the html  animals with the server
  router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/animals.html'));
  });
  
 // connect the html  zookeepers with the server
  router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
  });


  module.exports = router;