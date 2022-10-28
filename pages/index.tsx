import { useState } from "react"
import Input from "../components/Input"

export default function Home() {

  const [total,setTotal] = useState(0)
  const [visitados,setVisitados] = useState(0)
  const [dias,setDias] = useState(0)
  const [porcentagem,setPorcentagem] = useState(92)
  const [resultado,setResultado] = useState(0 )
  const [bateuMeta,setBateuMeta] = useState(false)


  function calcular(total:number,visitados:number,dias:number,porcentagem:number){

    if(total && dias && visitados && porcentagem){
      const meta = total*(porcentagem/100)
     
      const diff = meta-visitados
      
      if (diff <= 0) {
        setBateuMeta(true)
      }else{
        setResultado(diff/dias)
      }
    }else{
      window.alert('Esqueceu de preencher algo donzela, ta achando que meu programa faz mágica?')
    }
  }


  return (

  
    <div className='bg-zinc-800 min-h-screen  m-auto flex flex-col items-center'>
      <div className="mt-20">
        <p className="text-violet-200 font-semibold  text-2xl font-display ">Calculadora da Canirinha</p>

        <div className="mt-20 flex flex-col gap-y-5">
          <Input label='Número total de Médicos' setFunction={setTotal}/>
          <Input label='Médicos visitados' setFunction={setVisitados}/>
          <Input label='Dias Restantes' setFunction={setDias}/>
          <Input label='Porcentagem Esperada' setFunction={setPorcentagem}/>


        </div>
      </div>

      <button 
      className=" bg-violet-300 w-fit py-1 px-6 h-[38px] rounded text-violet-800 font-display font-bold hover:bg-violet-400 hover:text-white transition duration-300 mt-8 mb-4"
      onClick={()=>calcular(total,visitados,dias,porcentagem)}
      >Calcular ➜</button>


      {resultado!=0 && 
        <div className="text-zinc-100 flex flex-center flex-col px-4 gap-4 mt-4 text-1xl ">
          <p>Porcentagem atual : {((visitados/total)*100).toFixed() }%</p>
          <p > Para cumprir a meta de {porcentagem}% você deverá lançar <span className="text-purple-400 font-bold">{resultado.toFixed(1)} </span>visitas diariamente</p>
        </div>
      }

      {bateuMeta && <div className="text-zinc-100 text-1xl " >Já bateu a meta minha querida, vai passear.</div>}
    </div>
  )
}
