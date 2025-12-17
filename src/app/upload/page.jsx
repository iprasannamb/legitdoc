"use client"
import { Input } from "@/components/ui/input"

export default function page() {
const fileHandle=(e)=>{
console.log(e.target.files)
}
  return (
  <>

<div className="flex h-52 items-center justify-center">

  <Input type="file" placeholder="Email" className={'w-50 bg-gray-100'} onChange={fileHandle}/>
</div>


  </>)
  
}
