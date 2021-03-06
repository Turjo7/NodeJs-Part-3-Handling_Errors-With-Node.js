const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
  res.status(200).json({
    message: "Orders Were Fetched"
  });
});


router.post('/',(req,res,next)=>{
  res.status(201).json({
    message: "Orders Were Created"
  });
});



router.get('/:orderId',(req,res,next)=>{
  res.status(201).json({
    message: "Orders Were Created",
    orderId: req.params.orderId
  });
});


router.delete('/:orderId',(req,res,next)=>{
  res.status(201).json({
    message: "Orders Deleted",
    orderId: req.params.orderId
  });
});
module.exports = router;
