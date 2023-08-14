import { FC } from 'react'

interface TagProps {
  tag:string;
  filter:string;
  setFilter:()=>void;
}

const Tag: FC<TagProps> = ({filter,tag,setFilter}) => {
  return  <button onClick={()=>setFilter(tag)} className={`${tag==="All" && filter === "" && "bg-[#9EFF70]"} ${filter===tag && "bg-[#9EFF70]"} text-sm inline-flex mb-2 justify-between items-center border border-slate-950 py-1 px-4 rounded-2xl uppercase ${filter===tag ? "hover:bg-[#8BE363]" : "hover:bg-slate-100"}  hover:translate-y-[-5px] transition-all`}>{tag}</button>
}

export default Tag

