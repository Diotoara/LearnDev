import Navbar from './sections/Navbar'
import Sidebar from './components/Sidebar'
import Cards from './sections/Home'


const dashboard = () => {
  return (
    <>
    <div className='flex'>

        <div className="fixed top-0 w-324 ml-[224px] bg-white z-50 ">
          <Navbar />
        </div>


      <div>
        <Sidebar/>
      </div>

      <div className='flex-1 pt-14'>
        <Cards/>
      </div>

    </div>


    </>
  )
}

export default dashboard