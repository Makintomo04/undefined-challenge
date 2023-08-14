import { FC } from 'react'
import { Oval } from 'react-loader-spinner'

interface LoaderProps {
  
}

const Loader: FC<LoaderProps> = ({}) => {
  return <div className='flex flex-1 h-[75vh] w-full justify-center items-center '>
    
 <Oval
  height={80}
  width={80}
  color="#9EFF70"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor= '#78B85A'
  strokeWidth={2}
  strokeWidthSecondary={2}

/>
  </div>
}

export default Loader