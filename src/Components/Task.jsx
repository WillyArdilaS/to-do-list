const Task = () => {
  return (
    <div className="bg-white shadow-md rounded-lg px-5 py-10 mt-5">
        <p className="font-bold text-gray-700 uppercase mb-3"> 
            Title: {' '} 
            <strong className="font-normal normal-case"> Crear API </strong>
        </p>

        <p className="font-bold text-gray-700 uppercase mb-3"> 
            Date: {' '} 
            <strong className="font-normal normal-case"> 01 Septiembe 2022 </strong>
        </p>

        <p className="font-bold text-gray-700 uppercase mb-3"> 
            Description: {' '} 
            <strong className="font-normal normal-case"> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Consectetur, consequatur, nulla alias vitae animi ea quos commodi totam et numquam autem dolor assumenda 
                recusandae nam qui laudantium ullam corporis earum? 
            </strong>
        </p>
    </div>
  );
}

export default Task