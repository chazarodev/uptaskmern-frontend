import { useEffect } from "react"
import useProyectos from "../hooks/useProyectos"
import PreviewProyecto from "../components/PreviewProyecto"
import Alerta from "../components/Alerta"
// import { io } from "socket.io-client"

// let socket

const Proyectos = () => {

  const { proyectos, alerta } = useProyectos()

  //El Effect, en socket.io, usualmente se deja sin dependencias para poder escuchar a cada momento.
  // useEffect(() => {
  //   socket = io(import.meta.env.VITE_BACKEND_URL)
  //   socket.emit('prueba')
  //   socket.on('respuesta', () => {
  //     console.log('Chiguen su madre Atte: desde el backend');
  //   })
  // })
  
  const {msg} = alerta

  return (
    <>
        <h1 className="text-4xl font-black">
            Proyecto
        </h1>
        {msg && <Alerta alerta={alerta} />}
        <div className="bg-white shadow mt-10 rounded-lg">
            {proyectos.length ? 
              proyectos.map(proyecto => (
                <PreviewProyecto 
                  key={proyecto._id}
                  proyecto={proyecto}
                />
              ))
            : <p className="text-center text-gray-600 p-5 uppercase">No hay proyectos</p>}
        </div>
    </>
  )
}

export default Proyectos