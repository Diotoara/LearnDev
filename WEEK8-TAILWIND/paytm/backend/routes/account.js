const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware')
const {AllAccounts} = require('../db')

router.get('/balance', authMiddleware , async(req,res)=>{
    const account = await AllAccounts.findOne({
        userId : req.userid, 
    });

    res.json({
        balance : account.Balance
    })
})


router.post('/transffer', authMiddleware ,async(req,res)=>{
    const to = req.body;   //enter user id
    const amount = req.body;

    const account = await AllAccounts.findOne({
        userId : req.userid,
    });

    if(account.Balance < amount){
        return res.status(400).json({
            message: "Insufficient balance"
        })
    }
    const receiver = await AllAccounts.findOne({
        userId:to,
    })

    if(!receiver) return res.status(400).json({message:"Invalid Account"})
    
    await AllAccounts.updateOne(
        {userId: req.userId},
        {$inc : {Balance:-amount}}
    );

    await AllAccounts.updateOne(
        {userId: to},
        {$inc : {Balance:amount}}
    );

    res.json({
        message: "Transfer successful"
    })

});


module.exports = router;