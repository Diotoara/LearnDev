import express from "express";
const app = express();

app.use(express.json());

const otpStore : {[key:string] : string} = {};

app.post("/generate-otp",(req,res)=>{
    const {email} = req.body;
    if(!email) {
        return res.status(403).json({
            message : "Email is required"
        })
    }
    const otp = Math.floor(100000 + Math.random() * 900000).toString();  //generate a 6 digit otp.
    otpStore[email] = otp;
    //need to send Email heree. 
    console.log(`OTP for ${email} : ${otp}`);
    res.status(200).json({
        message : "OTP generated and logged"
    })
})

app.post("/reset-password",(req,res)=>{
    const {email, otp, newPassword} = req.body;
    if(!email || !otp || !newPassword){
        return res.status(403).json({
            message : "Email, OTP and new password is required"
        })
    }
    if(otpStore[email]===otp){
        console.log(`Password for ${email} has been reset to ${newPassword}`);
        delete otpStore[email];
        res.status(201).json({
            message : "Password has been reset succesfully"
        })
    } else{
        res.status(401).json({
            message : "Invalid OTP"
        })
    }
});

app.listen(5000,()=>{
    console.log("Port is listening on 5000")
})