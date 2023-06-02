import { Link } from 'react-router-dom';
import plantsData from '../plants.json';
import SinglePlant from '../pages/SinglePlant';

const PlantsList = ({ plant }) => {
  const navigateToSinglePlant = (plantId) => {
    <Link to={`plantations/${plantId}`}>
      <SinglePlant plantId={plantId} />
      {console.log(plantId)}
    </Link>;
  };

  const {
    plant_id,
    name,
    main_img,
    plantation_date_start,
    plantation_date_end,
    harvest_date_start,
  } = plant;
  return (
    <article className='plantCard' id={plant_id}>
      <div className='img-container'>
        <img src={main_img} alt={name} />
      </div>
      <div className='plant-footer'>
        <h3>{name}</h3>
        <h4>
          <b>Plantation :</b> du {plantation_date_start} au{' '}
          {plantation_date_end}
        </h4>
        <h4>
          <b>Récolte</b> à partir du : {harvest_date_start}
        </h4>
        <div className='detailsBtnContainer'>
          <button
            className='detailsBtn'
            onClick={() => navigateToSinglePlant(plant_id)}
          >
            détails
          </button>
        </div>
      </div>
    </article>
  );
};

export default PlantsList;
