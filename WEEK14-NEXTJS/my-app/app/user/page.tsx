import axios from "axios"

async function fetchData(){
    const response = await axios.get("http://localhost:3000/api/user")
    return response.data
}


export default async function User(){
    const data = await fetchData();
    return(
        <div className="text-white bg-black flex flex-col h-screen items-center justify-center">
            <div>
                {data.name}
            </div>
            <div>
                {data.email}
            </div>
        </div>
    )
}