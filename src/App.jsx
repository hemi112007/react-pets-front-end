// src/App.jsx
import { useState, useEffect } from 'react';
import * as petService from './services/petService';
import PetList from './components/PetList/PetList';
import PetDetail from './components/PetDetail/PetDetail';

const App = () => {
  const [pets, setPets] = useState([]);

  const [selected, setSelected] = useState(null);

  const handleSelect = (pet) => {
    setSelected(pet)
  }

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const fetchedPets = await petService.index();
        console.log(fetchedPets)
        if (fetchedPets.err) {
          throw new Error(fetchedPets.err);
        }
        setPets(fetchedPets);
      } catch (err) {
        
        console.log(err);
      }
    };
    fetchPets();
  }, []);
  return (
    <>
      <PetList pets={pets} handleSelect={handleSelect}/>
      <PetDetail selected={selected} />
    </>
  );
};

export default App;