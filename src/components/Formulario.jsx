import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useProyectos from '../hooks/useProyectos'
import Alerta from './Alerta'

const Formulario = () => {

    const [id, setId] = useState(null)
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [fechaEntrega, setFechaEntrega] = useState('')
    const [cliente, setCliente] = useState('')

    const params = useParams()
    const { alerta, mostrarAlerta, submitProyecto, proyecto } = useProyectos()

    useEffect(() => {
        if (params.id) {
            setId(proyecto._id)
            setNombre(proyecto.nombre)
            setDescripcion(proyecto.descripcion)
            setFechaEntrega(proyecto.fechaEntrega?.split('T')[0])
            setCliente(proyecto.cliente)
        }
    }, [params])


    const handleSubmit = async e => {
        e.preventDefault()

        if ([nombre, descripcion, fechaEntrega, cliente].includes('')) {
            mostrarAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true,
            })
            return
        }

        //Pasar los datos al provider
        await submitProyecto({id, nombre, descripcion, fechaEntrega, cliente})

        setId(null)
        setNombre('')
        setDescripcion('')
        setFechaEntrega('')
        setCliente('')

    }

    const { msg } = alerta

  return (
    <form
        className='bg-white py-10 px-5 md:w-1/2 rounded-lg shadow-md'
        onSubmit={handleSubmit}
    >
        {msg && <Alerta alerta={alerta} />}
        <div className='mb-5'>
            <label 
                htmlFor='nombre'
                className='text-gray-700 uppercase font-bold text-sm'
            >
                Nombre Proyecto
            </label>
            <input 
                type="text" 
                name="name"
                placeholder='Nombre del Proyecto' 
                id="nombre" 
                className='border w-full p-2 mt-2 placeholder-slate-400 rounded-md' 
                value={nombre}
                onChange={e => setNombre(e.target.value)}
            />
        </div>
        <div className='mb-5'>
            <label 
                htmlFor='descripcion'
                className='text-gray-700 uppercase font-bold text-sm'
            >
                Descripcion
            </label>
            <textarea 
                name="descripcion"
                placeholder='Descripcion del Proyecto' 
                id="descripcion" 
                className='border w-full p-2 mt-2 placeholder-slate-400 rounded-md' 
                value={descripcion}
                onChange={e => setDescripcion(e.target.value)}
            />
        </div>
        <div className='mb-5'>
            <label 
                htmlFor='fecha-entrega'
                className='text-gray-700 uppercase font-bold text-sm'
            >
                fecha de entrega
            </label>
            <input 
                type="date" 
                name="fecha-entrega"
                placeholder='fecha de entrega del Proyecto' 
                id="fecha-entrega" 
                className='border w-full p-2 mt-2 placeholder-slate-400 rounded-md' 
                value={fechaEntrega}
                onChange={e => setFechaEntrega(e.target.value)}
            />
        </div>
        <div className='mb-5'>
            <label 
                htmlFor='cliente'
                className='text-gray-700 uppercase font-bold text-sm'
            >
                Nombre Cliente
            </label>
            <input 
                type="text" 
                name="cliente"
                placeholder='Nombre del Cliente' 
                id="cliente" 
                className='border w-full p-2 mt-2 placeholder-slate-400 rounded-md' 
                value={cliente}
                onChange={e => setCliente(e.target.value)}
            />
        </div>
        <input 
            type="submit" 
            value={id ? "Actualizar Proyecto" : "Crear Proyecto"}
            className='bg-sky-600 w-full p-3 uppercase font-bold text-white rounded cursor-pointer hover:bg-sky-700 transition-colors' 
        />
    </form>
  )
}

export default Formulario