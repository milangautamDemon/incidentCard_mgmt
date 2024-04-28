import { GiCrossMark } from "react-icons/gi";
const InputsForm = ({stateChange, addCard, formState, addNewCardDisplay, setAddNewCardDisplay}) => {
    return(
        <>

        <div className={`fixed top-0 left-0 w-screen flex justify-center items-center h-screen bg-black/75  ${addNewCardDisplay}`}>
            <div className="addList-form w-5/6 h-4/6 rounded-lg lg:w-2/5 py-8 px-12 flex flex-col gap-8 bg-white">
                <div className="remove flex justify-end"><GiCrossMark  onClick={() => setAddNewCardDisplay("invisible")} size={30}/></div>
                <input className="text-lg border-none font-bold outline-none shadow-md shadow-black/70 bg-gray-300 rounded-md px-4 py-2" placeholder='Status' onChange={e => stateChange({status: e.target.value, })} value={formState.status} ></input>
                <input className="text-lg outline-none shadow-md shadow-black/70 font-bold bg-gray-300 rounded-md px-4 py-2" placeholder='Incident Number' onChange={e => stateChange({incidentNumber: e.target.value, })} value={formState.incidentNumber} ></input>
                <input className="text-lg outline-none shadow-md shadow-black/70 font-bold bg-gray-300 rounded-md px-4 py-2" placeholder='Title' onChange={e =>stateChange({title: e.target.value,})} value={formState.title}></input>
                <input className="text-lg outline-none shadow-md shadow-black/70 font-bold bg-gray-300 rounded-md px-4 py-2" placeholder='Date' onChange={e => stateChange({time: e.target.value, })} value={formState.time} ></input>
                <input className="text-lg outline-none shadow-md shadow-black/70 font-bold bg-gray-300 rounded-md px-4 py-2" placeholder='Priority Value' onChange={e => stateChange({priority: e.target.value, })} value={formState.priority} ></input>
                
                <div className="btn w-full flex gap-4 justify-end">
                    <button className="bg-red-500 shadow-lg text-xl shadow-black/50 hover:bg-red-600 text-white mt-4 py-2 px-4 rounded-lg" onClick={() => setAddNewCardDisplay("invisible")}>Cancel</button>
                    <button className="bg-blue-500 shadow-lg text-xl shadow-black/50 hover:bg-blue-600 text-white mt-4 py-2 px-4 rounded-lg" onClick={addCard}>Add Card</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default InputsForm;