import { FC, useState,useEffect } from 'react'
import '../index.css'
import arrow from '../assets/Vector 16.png'
import thumbup from '../assets/thumbup.png'
import thumbdown from '../assets/thumbdown.png'

interface CardProps {
  item: object
}


const Card: FC<CardProps> = ({item}) => {

  const [like,setLike] = useState(false);
  const [dislike,setDislike] = useState(false);
  const [currentEngagement,setCurrentEngagement] = useState("");
  const likeStorageKey = `card_${item?.id}_like`;
  const dislikeStorageKey = `card_${item?.id}_dislike`;

  useEffect(() => {
    console.log('Setting like state:', like);
sessionStorage.setItem(likeStorageKey, like.toString());
sessionStorage.setItem(dislikeStorageKey, dislike.toString());
    
},[like,dislike,likeStorageKey,dislikeStorageKey])


  useEffect(() => {
    
    switch (currentEngagement) {
      case "like":
        setLike(true)
        setDislike(false)
        break;
        case "dislike":
          setDislike(true)
          setLike(false)
        break;
        case "":
          setDislike(false)
          setLike(false)
        break;
        default:
          setDislike(false)
          setLike(false)
        break;
    }


  },[currentEngagement])


const handleEngagement = (selectedEngagement) => {
  if(selectedEngagement === currentEngagement){
    setCurrentEngagement("")
    if(selectedEngagement === "dislike") setLike(false)
    else setDislike(false)
    return
  }
  setCurrentEngagement(selectedEngagement)
}


  return <div className='group/card relative rounded-[20px]  my-8 flex justify-between lg:h-[261px] md:h-[280px] sm:h-[300px] xs:h-[320px] overflow-hidden border border-slate-950 gap-10'>
    <div className={`${currentEngagement ? "flex" : "hidden"} group-hover/card:flex absolute top-0 right-0`}>
    <div onClick={()=>handleEngagement("dislike")} className={`h-12 w-12 bg-white-400 border-l border-b border-slate-950 flex justify-center items-center cursor-pointer transition-all ${dislike ? "bg-red-500" : "bg-white"} ${dislike ? "hover:bg-red-700" : "hover:bg-slate-100"}`}><img src={thumbdown}/></div>

    <div onClick={()=>handleEngagement("like")} className={`h-12 w-12  cursor-pointer border-l border-b border-slate-950 flex justify-center items-center ${like ? "bg-[#9EFF70]" : "bg-white"} ${like ? "hover:bg-[#8BE363]" : "hover:bg-slate-100"} transition-all`}><img src={thumbup}/></div>
    
    </div>
    <div className="lg:flex-[0.3] md:flex-[0.7] border-r border-slate-950">
      <img className='h-[100%] w-[100%] object-cover object-center' src={`${item?.fields?.images[0]?.thumbnails?.full?.url}`}/>
    </div>
    <div className="p-2 pl-0 flex-1">
    <div className='text-sm inline-flex mb-2 justify-between items-center border border-slate-950 mt-[17px]  py-1 px-4 rounded-2xl uppercase'>{item?.fields?.tags}</div>
    <h1 className="text-[40px] font-semibold">{item?.fields?.name}</h1>

    <p className='text-md font-medium text-slate-500 max-w-3xl pr-6 '>{item?.fields?.description.substring(0,150)}...</p>

    <div className="flex items-center mt-[17px]">
    <button className='group flex justify-between items-center border border-slate-950   py-1 px-8 rounded-2xl bg-[#9EFF70] hover:bg-[#8BE363] transition-all'>SEE DETAILS<img className='ml-[14px] group-hover:translate-x-4 transition-all' src={arrow}/></button>
    <a href={item?.fields?.website} target='_blank' className="uppercase ml-[20px] lg:ml-10 text-sm underline underline-offset-4 font-medium italic text-[#004D43]">{item?.fields?.shopify_url}</a>
    </div>
    </div>
  </div>
}

export default Card