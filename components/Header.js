import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

function Header() {
  const router = useRouter ()
  return (

  <header className='fixed top-0 left-0 w-full bg-gray-100 z-10 transition duration-500 px-4 md:px-16'>    
    <nav className='h-16 flex justify-between items-center'>
      <div>
      <Link href='/'>
        <a>
          
        <svg fill="rgba(5, 150, 105, 1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px">    <path d="M45,4H5C4.448,4,4,4.448,4,5v40c0,0.552,0.448,1,1,1h40c0.552,0,1-0.448,1-1V5C46,4.448,45.552,4,45,4z M40,13.5 l-1.821,2.197C38.064,15.811,38,15.965,38,16.125V32.75c0,0.16,0.064,0.314,0.179,0.428L40,35.546V36H30v-0.454l2.821-2.368 C32.936,33.064,33,32.91,33,32.75V17.879L24.848,36h-0.001h-1.543l0,0L15,18.375v13.108c0,0.22,0.076,0.433,0.215,0.605L18,35.546 V36h-8v-0.454l2.783-3.438C12.923,31.936,13,31.721,13,31.5V16.388c0-0.142-0.05-0.279-0.142-0.388L11,13.5V13h7.097l7.624,16.183 L33.002,13H40V13.5z"/></svg>
        </a>
      </Link>
      </div>
      <div className='fixed md:relative md:rounded-tl-none md:rounded-tr-none md:shadow-none bottom-0 left-0 bg-gray-100 shadow-xl w-full h-16 py-0 px-4 grid content-center rounded-tl-md rounded-tr-md transition duration-500 md:justify-end md:pr-0'> 
        <ul className='flex justify-around md:justify-center'>
          
          <li className='pl-8'>
            <Link href='/'>
            <a className={`hover:border-b-2 border-green-500 relative flex flex-col justify-center items-center mr-4 my-auto hover:text-green-700  font-normal font-serif text-xl ${router.pathname == "/" ? "text-green-600 border-b-2 border-green-600" : ""}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className='hidden sm:block text-sm md:text-base md:font-medium'>Home</span>




              </a>
            </Link>
          </li>
          
          <li className='pl-8'>
            <Link href='/about'>
            <a className={` hover:border-b-2 border-green-500 flex flex-col justify-center items-center mr-4 my-auto hover:text-green-700 font-normal font-serif text-xl ${router.pathname == "/about" ? "text-green-600 border-b-2 border-green-600" : ""}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className='hidden sm:block text-sm md:text-base md:font-medium'>About</span>

              </a>
            </Link>
          </li>
          
          <li className='pl-8'>
            <Link href='/skills'>
            <a className={`hover:border-b-2 border-green-500 flex flex-col justify-center items-center mr-4 my-auto hover:text-green-700 font-normal font-serif text-xl ${router.pathname == "/skills" ? "text-green-600 border-b-2 border-green-600" : ""}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className='hidden sm:block text-sm md:text-base md:font-medium'>Skills</span>

              </a>
            </Link>
          </li>
          <li className='pl-8'>
            <Link href='/portfolio'>
            <a className={`hover:border-b-2 border-green-500 flex flex-col justify-center items-center  mr-4 my-auto hover:text-green-700 font-normal font-serif text-xl ${router.pathname == "/portfolio" ? "text-green-600 border-b-2 border-green-600" : ""}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className='hidden sm:block text-sm md:text-base md:font-medium'>Portfolio</span>

              </a>
            </Link>
          </li>

          <li className='pl-8'>
            <Link href='/contact'>
            <a className={` hover:border-b-2 border-green-500 flex flex-col justify-center items-center mr-4 my-auto hover:text-green-700 font-normal font-serif text-xl ${router.pathname == "/contact" ? "text-green-600 border-b-2 border-green-600" : ""}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className='hidden sm:block text-sm md:text-base md:font-medium'>Contact</span>

              </a>
            </Link>
          </li>
        </ul>

      </div>
      <div className='block w-8 h-8 md:hidden'>

        <Image
            width={40}
            height={40}
            alt='Imagem Hero'                    
            src="/images/rodo.jpg"
            className='rounded-full'
        />
      </div>              

    </nav>

  </header>


  )
}

export default Header