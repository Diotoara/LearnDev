

export default function InputBox( {label, placeholder} ){
    return(
        <>
        <div className="font-semibold pb-1">
            {label}
        </div>
        <input className="border border-gray-600 rounded-sm pr-20 py-1 pl-2 font-sans" type="text" placeholder={placeholder} />
        </> 
    )

}