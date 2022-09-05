import { useState } from "react";

const Form = () => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if([title, date, description].includes("")) {
            setError(true);
            return;
        } 
        
        setError(false);
    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center mb-8"> Task Creation </h2>

            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
                {error && (
                    <div className="bg-red-600 font-bold uppercase text-white text-center p-3 mb-5 rounded-md">
                        <p> There are still some empty fields </p>
                    </div>
                )}

                <div className="mb-5">
                    <label htmlFor="taskForm-title" className="block text-gray-700 uppercase font-bold"> Title </label>
                    <input type="text" id="taskForm-title" placeholder="Task Title" 
                    value={title} onChange={(e) => setTitle(e.target.value)}
                    className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"/>
                </div>

                <div className="mb-5">
                    <label htmlFor="taskForm-date" className="block text-gray-700 uppercase font-bold"> Date </label>
                    <input type="date" id="taskForm-date" min={"2022-09-01"} 
                    value={date} onChange={(e) => setDate(e.target.value)}
                    className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"/>
                </div>

                <div className="mb-5">
                    <label htmlFor="taskForm-description" className="block text-gray-700 uppercase font-bold"> Description </label>
                    <textarea id="taskForm-description" placeholder="Task Description" 
                    value={description} onChange={(e) => setDescription(e.target.value)}
                    className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"/>
                </div>

                <input type="submit" value={"Create Task"}
                className="bg-blue-600 w-full p-3 text-white uppercase font-bold rounded-md hover:cursor-pointer
                hover:bg-blue-700 transition-colors"/>
            </form>
        </div>
  );
}

export default Form