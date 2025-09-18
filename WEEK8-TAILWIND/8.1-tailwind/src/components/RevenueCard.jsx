

export const RevenueCard = ({text, amount, order}) =>{
    return(
        <>
        <div className="bg-white rounded pl-4 shadow-md">

            <div className="text-gray-500 flex" >
                <div className="pr-2">
                {text}
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>

            </div  >
            <div className=" pt-3 flex justify-between">
                <div className="font-bold text-lg">
                    {amount}
                </div>
                {order ? <div className="text-blue-500 underline" > {order} order(s) {">"} </div> : null } 
                
            </div>
        </div>
        </>
    )
}