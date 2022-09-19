import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useProyectos from '../hooks/useProyectos'
import Formulario from '../components/Formulario'

const EditarProyecto = () => {

    const params = useParams()
    const { obtenerProyecto, proyecto, cargando } = useProyectos()

    useEffect(() => {
      obtenerProyecto(params.id)
    }, [])

    const { nombre } = proyecto

    if (cargando) return "Cargando..."

  return (
    <>
        <h1 className="font-black text-4xl ">Editar proyecto: {nombre}</h1>
        <div className='mt-10 flex justify-center'>
            <Formulario />
        </div>
    </>
  )
}

export default EditarProyecto