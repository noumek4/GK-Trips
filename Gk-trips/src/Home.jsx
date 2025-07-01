import { FaSearch, FaUserCircle } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';

function Home() {
    return(
       <div className='bg-blue-600 p-4 flex items-center justify-between text-white'>
        <div className='flex items-center'>
            <FaSearch className='mr-2' />
            <input
                type='text'
                placeholder='Search'
                className='px-2 py-1 rounded text-black'
                />
        </div>

        <div className='flex items-center gap-4'>
            <button>Create an Account</button>
            <button>Sign in</button>
            <AiOutlineMenu size={24} />
            <FaUserCircle size={24} />
        </div>
       </div> 
    )
} 

export default Home
