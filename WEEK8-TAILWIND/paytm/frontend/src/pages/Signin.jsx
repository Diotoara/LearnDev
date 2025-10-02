import Heading from "../components/Heading"
import SubHeading from "../components/SubHeading"
import InputBox from "../components/InputBox"
import Button from "../components/Button"
import {Link} from "react-router-dom"

const Signin = () => {
  return (
    <div className="bg-gray-400 h-screen w-screen flex justify-center items-center" >
        <div className="bg-white h-90 w-80 rounded-2xl">
            <div className="flex justify-center pt-5">
                <Heading text={"Sign in"}  />
            </div>
            <div className="flex justify-center text-center pt-2 px-8 ">
                <SubHeading text={"Enter you credentials to access your account"}  />
            </div>
            <div className="px-4">
                <InputBox label={"Email"} placeholder={"johndoe@example.com"} />
            </div>
            <div className="px-4 pt-4">
                <InputBox label={"Password"} placeholder={""} />
            </div>
            <div className="pt-4 flex justify-center ">
                <Button text={"Sign in"} to={"/dashboard"} />
            </div>
            <div className="flex justify-center">
                Dont have an account?
                <div className="underline ml-1 cursor-pointer">
                    <Link to={"/signup"} >
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signin