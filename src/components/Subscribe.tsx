const Subscribe = () => {
    return (
        <div className='w-full h-[30vh] max-w-2xl mx-auto my-16 flex flex-col justify-center items-center '>
            <div className='text-center space-y-2 mb-8'>
                <h2 className='font-bold text-3xl md:text-2xl'>Subscribe to our newsletter to get updates to our lastest collections</h2>
                <p className='text-lg text-gray-500'>Get 20% off on your frist order just by subcribing to our newsletter</p>
            </div>
            <div className='flex space-x-1 w-full justify-center'>
                <input type="text" placeholder="Enter your email" className="input input-bordered w-full max-w-md rounded-md" />
                <button className="btn rounded-md">Subscribe</button>
            </div>

        </div>
    )
}

export default Subscribe