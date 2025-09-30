const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware')
const {AllAccounts} = require('../db')

router.get('/balance', authMiddleware , async(req,res)=>{
    const account = await AllAccounts.findOne({
        userId : id1,
    });

    if (!account) {
    return res.status(404).json({ error: "Account not found" });
  }

    res.json({
        "balance" : account.Balancey
    })
})


router.post('/transffer', authMiddleware ,async(req,res)=>{

    //session for each payment.
    const session = await mongoose.startSession();
    session.startTransaction();


    const to = req.body;   //enter user id
    const amount = req.body;

    const account = await AllAccounts.findOne({
        userId : req.userid,
    }).session(session)

    if(!account || account.Balance < amount){
        return res.status(400).json({
            message: "Insufficient balance"
        })
    }
    const receiver = await AllAccounts.findOne({
        userId:to,
    }).session(session)

    if(!receiver){
        await session.abortTransaction();
        return res.status(400).json({message:"Invalid Account"})
    } 
    
    await AllAccounts.updateOne(
        {userId: req.userId},
        {$inc : {Balance:-amount}}
    ).session(session);

    await AllAccounts.updateOne(
        {userId: to},
        {$inc : {Balance:amount}}
    ).session(session);

    //commiting transactions
    await session.commitTransaction()
    res.json({
        message: "Transfer successful"
    })

});


module.exports = router;