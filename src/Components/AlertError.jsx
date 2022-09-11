const AlertError = ({children}) => {
  return (
    <div className="bg-red-600 font-bold uppercase text-white text-center p-3 mb-5 rounded-md">
        <p> {children} </p>
    </div>
  )
}

export default AlertError