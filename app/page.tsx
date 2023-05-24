
"use client"
import { useState } from "react"
import { ImportsNotUsedAsValues } from "typescript";

const Page = () => {
  const [nombre,setNombre] = useState(" ")
  const [contador, setContador] = useState(0)
  const [edad, setEdad] = useState(0)
  const [resultado, setResultado] = useState(" ")



  function contar(){
    setContador(contador + 1);
  }

  function limpiar(){
    setContador(0)
  }

  const manejadorFormulario = (e:any) => {

    e.preventDefault();
    console.log("se hizo click");

     if(edad <= 18){
      setResultado('Es menor de edad')        
      }
      else{
      setResultado('Es mayor de edad')
        
      }
    
  }

  return (
    <div>
      <center>
        <h1>Proyecto Final</h1>
        <h2>Estructuras de Datos</h2>
        <h3>{nombre}</h3>
        <h3>silly boy</h3>
        <div><img src="https://preview.redd.it/b6f2c06mqb1a1.jpg?width=640&crop=smart&auto=webp&s=24c308ec36b3705c57f9546d17ed2d87501218b6" 
          width="300"
          height="350" /></div>
        <button onClick={contar}>


          Contar
        </button>
        <p>{contador} numero de gatos</p>
        <button onClick={limpiar}>
          Borrar
        </button>

        <form

          onSubmit={manejadorFormulario}
        >
        
          <input 
          type="text" 
          placeholder="Nombre"
          value={nombre} 
          onChange={(event)=> setNombre(event.target.value)}
          />

         <input 
          type="number" 
          placeholder="Edad"
          value={edad} 
          onChange={(e)=> setEdad(parseInt(e.target.value))}
          />

          <input type="submit" />

        </form>

          <p>{resultado}</p>

        </center>
    </div>
  )
}

export default Page

