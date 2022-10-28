export interface InputProps{
  label:string
  setFunction: void
}

export default function Input({label,setFunction}){

  return(
    <div className="flex flex-col">
      <label htmlFor="" className="text-zinc-100 ">{label}</label>
      <input 
      type="number" 
      className="font-body p-1 rounded"
      onChange={(e)=>setFunction(e.target.value)}
      />
    </div>
  )
}