import { useEffect, useState } from 'react';
import CardList from '../Component/CardList';
import InputsForm from '../Component/InputsForm';


const HomePage = () => {
  const [addNewCardDisplay, setAddNewCardDisplay] = useState("invisible");

        const [getCard, setCard] = useState([]);

        const fetchData = async () => {
          try{   
            const response = await fetch("http://localhost:5001/api/inputDatas", {
              method : "GET"
            });
            const datas = await response.json();
            setCard(datas);
          }
          catch (error){
            console.log("Data fetching error: ", error)
          }
        }

        useEffect(() => {
          fetchData();
        },[])

          const [formState, setFormState] = useState(
            {
              title: "",
                incidentNumber: "",
                time: "",
                priority: "",
                status: "",
            }
          );
        

          const handleAddCard = async (e) =>{
            e.preventDefault();
            const newCards = [{
              incidentNumber: parseInt(formState.incidentNumber),
              title: formState.title,
              time: formState.time,
              priority: parseInt(formState.priority),
              status: formState.status,
            }]

            const card = newCards[0];
            if(card.incidentNumber === "" || card.title === "" || card.time ===  "" || card.priority === "" || card.status === "" ){
              alert("Please fill all the input field !!!")
              setAddNewCardDisplay("visible")
              return;
            }

            if (isNaN(card.incidentNumber) || isNaN(card.priority)) {
              alert("Please Enter Number in IncidentNumber & Priority Field !!!");
              setAddNewCardDisplay("visible")
              return;
            }
            const dateRegex = /^\d{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])$/;

            if (!dateRegex.test(card.time)) {
             alert('Invalid date format');
             setAddNewCardDisplay("visible")
             return;
            }
            else {

              try {
                const response = await fetch('http://localhost:5001/api/inputDatas', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(card),
                });
            
                if (!response.ok) {
                  const errorData = await response.text();
                  throw new Error(`Failed to insert data: ${errorData}`);
                }
            
                const result = await response.json();
                console.log('Data inserted successfully:', result);
              } 
              catch (error) {
                console.error('Error inserting data:', error);
              }

            }
            setCard([...getCard, ...newCards])
          
            setFormState({
              title: "",
              incidentNumber: "",
              time: "",
              priority: "",
              status: "",
            })
            setAddNewCardDisplay("invisible")
            
          }
        
        
          const handleFormStateChange = (changedState) => {
            setFormState({
              ...formState,
              ...changedState
            })
          }
        
        
          const handleDeleteCard = (cardId) => {
            const newCardLists = getCard.filter(Card=> Card.incidentNumber !== cardId);
            setCard(newCardLists);
          }
          
        
          return (
            
            <div className="App mx-4"> 
              <button onClick={() => setAddNewCardDisplay('visible')} className='bg-gray-900 text-white rounded-md  px-4 py-2'>Add New Card</button>
              <InputsForm addNewCardDisplay={addNewCardDisplay} setAddNewCardDisplay={setAddNewCardDisplay} stateChange={handleFormStateChange} addCard={handleAddCard} formState={formState}/>
              <CardList cards={getCard} deleteCards={handleDeleteCard} />
            </div> 
          
          );
}
export default HomePage;