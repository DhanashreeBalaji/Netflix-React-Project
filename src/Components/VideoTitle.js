
const VideoTitle = ({title,desc}) => {
  return (
    <div className="w-screen aspect-video pt-[10%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
   <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
   <p className="hidden md:inline-block py-6 text-lg w-1/4 text-white z-10">{desc}</p>
   <div className='my-4 md:m-4'>
   <button
   className=" bg-white text-black py-1 md:py-2 px-2 md:px-9 text-xl rounded-lg hover:bg-opacity-80"> 
   ▶️ Play 
   </button>
   <button
   className="hidden md:inline-block mx-2  bg-gray-500 text-white p-2 px-9 text-xl bg-opacity-50 rounded-lg"
   > More Info </button>
   </div>
    </div>
  )
}

export default VideoTitle