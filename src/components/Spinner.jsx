import React from 'react'
import spinner from '../style/spinner.css'
const Spinner = () => {
  return (
      <spinner>
        <div className='w-screen h-screen md:w-full flex items-center justify-center my-auto'>
            <div className='w-24 flex flex-col items-center justify-center'>
                <svg
		            viewBox="0 0 24 24"
		            xmlns="<http://www.w3.org/2000/svg>"
	            >
                    <circle
                        cx="12" cy="12" r="8"
                        stroke-width="4" stroke="blue"
                        fill="none"
                    />
	            </svg>
              <p>Loading...</p>
            </div>
        </div>
    </spinner>
  )
}

export default Spinner