
import { Link } from 'react-router-dom'

function Navbar(){
    return(
              <header className='bg-white  p-[20px] flex justify-between ' >
        <h4 className='ml-30 text-bold font-bold'>✒️Blog verse</h4>
        <h4>🏠Home</h4>
        <h4 className='flex gap-10 mr-30'>
          <Link to="/Signin" >sign-in</Link>
          <Link to="/Signup" className='bg-blue-700 h-8 w-16 flex justify-center items-center rounded-md'>sign-up</Link>
        </h4>

      </header>
    )
}
export default Navbar