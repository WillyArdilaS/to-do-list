const Task = ({task, setActualTask}) => { 
  const {title, date, description} = task;

  return (
    <div className="bg-white shadow-md rounded-lg px-5 py-10 mt-5">
        <p className="font-bold text-gray-700 uppercase mb-3"> 
        Title: {' '} 
            <strong className="font-normal normal-case"> {title} </strong>
        </p>

        <p className="font-bold text-gray-700 uppercase mb-3"> 
            Date: {' '} 
            <strong className="font-normal normal-case"> {date} </strong>
        </p>

        <p className="font-bold text-gray-700 uppercase mb-3"> 
            Description: {' '} 
            <strong className="font-normal normal-case"> {description} </strong>
        </p>

        <div className="flex justify-between">
          <button className="bg-green-600 hover:bg-green-700 mt-4 py-2 px-10 rounded-md text-white font-bold"
          type="button" onClick={() => setActualTask(task)}> Update </button>

          <button className="bg-red-600 hover:bg-red-700 mt-4 py-2 px-10 rounded-md text-white font-bold"
          type="button"> Delete </button>
        </div>
    </div>
  );
}

export default Task