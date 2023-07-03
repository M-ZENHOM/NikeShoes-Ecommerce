import React from 'react'

const LoadingSkeleton = () => {
    return (
        <div className='flex  justify-center items-center h-[65vh]'>
            <span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    )
}

export default LoadingSkeleton