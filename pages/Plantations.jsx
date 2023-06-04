import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GiBirdHouse } from 'react-icons/gi';
import Loading from '../components/Loading';
import plantsData from '../plants.json';
import PlantsList from '../components/PlantsList';
import Goup from '../components/Goup';

const Plantations = () => {
  const [plantationsTab, setPlantationsTab] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  let newTab = [...plantationsTab];

  const getAllPlants = async () => {
    setIsLoading(true);
    try {
      setPlantationsTab(plantsData);
      setIsLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    getAllPlants();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filterPlantTab = newTab.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );
  if (isLoading) {
    return (
      <section className='plantsSection'>
        <Loading />
      </section>
    );
  }
  return (
    <section className='plantsSection'>
      <div className='calendarTitle'>
        <h2>Calendrier du potager</h2>
        <input
          type='text'
          placeholder='Chercher un plant'
          value={search}
          onChange={handleChange}
        />
      </div>
      <div className='plantsTab'>
        {filterPlantTab.length >= 1 ? (
          filterPlantTab.map((plant) => (
            <PlantsList plant={plant} key={plant.plant_id} />
          ))
        ) : (
          <h2>pas de résultat</h2>
        )}
      </div>

      <Link to='/'>
        <span className='backHome'>
          <GiBirdHouse />
        </span>
      </Link>
      <Goup />
    </section>
  );
};

export default Plantations;
