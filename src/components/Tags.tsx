import { FC } from 'react'
import Tag from './Tag';

interface TagsProps {
  tags:string[];
  filter:string;
  setFilter:()=>void;
}

const Tags: FC<TagsProps> = ({tags,setFilter,filter}) => {
  if(tags.length <= 1) return null;
  return  (<div className="flex gap-3 mt-[17px] flex-wrap">
  {tags.map((tag) => (
   <Tag tag={tag} setFilter={setFilter} filter={filter}/>
  ))}
  </div>)
}

export default Tags