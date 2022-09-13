
const Alerta = ({alerta}) => {
  return (
    <div className={`${alerta.error ? 'from-red-400 to-red-600' : 'from-sky-400 to-sky-600'} bg-gradient-to-br text-center rounded-xl uppercase text-white font-bold text-sm my-10 p-2`}>
        {alerta.msg}
    </div>
  )
}

export default Alerta