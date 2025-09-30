

import Heading  from "../components/Heading"
import SubHeading from "../components/SubHeading"
import InputBox from "../components/InputBox"
import Button from "../components/Button"

function Signup(){
    return(
        <div className="bg-gray-400 h-screen w-screen flex justify-center items-center">
            <div className=" bg-white h-130 w-80 rounded-2xl ">
               <div className="flex justify-center pt-5" >
                    <Heading text={"Sign up"}/>
                </div> 
                
                <div className="flex justify-center text-center px-8 pt-2">
                    <SubHeading text={"Enter your information to create an account"} />
                </div>

                <div className="pl-6 pt-2">
                    <InputBox label={"First Name"} placeholder={"Erwin"} />
                </div>
                <div className="pl-6 pt-4">
                    <InputBox label={"Last Name"} placeholder={"Smith"} />
                </div>
                <div className="pl-6 pt-4">
                    <InputBox label={"Email"} placeholder={"erwinSmith@cmd.com"} />
                </div>
                <div className="pl-6 py-4">
                    <InputBox label={"Password"} placeholder={"p@$$w@&d"} />
                </div>
                <div className="pl-6">
                    <Button text={"Sign Up"}/>
                </div>
                <div className="flex justify-center font-medium text-[16px]">
                    <div>
                    Already have an account?
                    </div>
                    <div className="underline ml-1 cursor-pointer">
                        Login
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup


{/* <Heading text={"Sign up"}/>
<SubHeading text={"Enter your information to create a account"} />
<InputBox label={"First Name"} placeholder={"John"} />
<Button/> */}