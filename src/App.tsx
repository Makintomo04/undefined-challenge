import { useState,useEffect } from 'react'
import './index.css'
import { getData } from './api'
import Card from './components/Card'
import { getUniqueTags } from './utils'
import Tag from './components/Tag'
import Tags from './components/Tags'
import CardContainer from './components/CardContainer'
import Loader from './components/Loader'

function App() {

const [data, setData] = useState([])
const [filteredData, setFilteredData] = useState([])
const [tags, setTags] = useState([])
const [filter, setFilter] = useState("")
const [loading, setLoading] = useState(true)

useEffect(() => {
  const retrieveData = async () => {
    const retrievedData = await getData()
    setData(retrievedData)
    setLoading(false)
  }
  retrieveData()
}, [])
useEffect(() => {
 
   try {
    setTags(getUniqueTags(data))
    
   } catch (error) {
    console.log(error);
   }

}, [data])

useEffect(() => {
  if(filter === "" || filter === "All") return setFilteredData(data)
  setFilteredData(data.filter((item) => item?.fields?.tags.includes(filter)))
},[data,filter])


  return (
    <div className='p-10 container mx-auto min-h-screen'>
    <h1 className='text-6xl font-semibold'>SHOP</h1>
    <Tags tags={tags} setFilter={setFilter} filter={filter}/>
    {!loading ? 
    <CardContainer filteredData={filteredData}/>
    : <Loader/>}
    </div>
  )
}

export default App
