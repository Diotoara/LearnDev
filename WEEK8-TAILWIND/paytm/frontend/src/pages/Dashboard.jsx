import Header from "../components/Header"
import Balance from "../components/Balance"
import UserSearch from "../components/UserSearch"
import User from "../components/User"

const Dashboard = () => {
  return (
    <div className="bg-[#89B0AE] min-h-screen px-3">
        <div className="flex justify-between ">
            <Header/>
        </div>
        <hr className="mt-3"/>
        <div className="pt-6">
            <Balance amount={"4000"} />
        </div>
        <div className="pt-8">
            <UserSearch/>
        </div>

        {/* all users */}

        <div className="pt-8 px-16">
            <User name={"Sane"} img={"https://img.pikbest.com/png-images/20241022/stealth-masked-hacker-gaming-logo-for-gamers_10991543.png!bw700"} />
        </div>

        <div className="pt-8 px-16">
            <User name={"Gin-san"} img={"https://i.pinimg.com/736x/ca/e9/c8/cae9c89925c82673eb86369071224359.jpg"} />
        </div>

        <div className="pt-8 px-16">
            <User name={"Musashi"} img={"https://i.pinimg.com/1200x/a0/ed/bf/a0edbfb912f9c932c84ef8ec61cd0f4e.jpg"} />
        </div>

        <div className="pt-8 px-16">
            <User name={"Toki"} img={"https://i.pinimg.com/736x/df/83/db/df83db46b52668ac501f505a5c802906.jpg"} />
        </div>

        <div className="pt-8 px-16">
            <User name={"Luffy"} img={"https://i.pinimg.com/736x/a2/ff/97/a2ff97da22b3ae54798b333b30031eee.jpg"} />
        </div>

    </div>
  )
}

export default Dashboard