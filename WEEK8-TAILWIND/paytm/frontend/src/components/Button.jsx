
export default function Button({text}){
    return(
        <div>
        <button type="button" class="text-white bg-black hover:bg-blue-200 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg font-normal px-27 py-1.5 me-2 mb-2 dark:bg-black dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            {text}
        </button>
        </div>
    )

}