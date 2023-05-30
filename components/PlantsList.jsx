import { Link } from 'react-router-dom';
import plantsData from '../plants.json';

console.log(plantsData.map((plant) => plant.name));

const PlantsList = ({ plant }) => {
  console.log(plant);
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
          {/* <Link to={`/plantations/${plant_id}`}> */}
          <button
            className='detailsBtn'
            onClick={() => console.log({ plant_id })}
          >
            détails
          </button>
          {/* </Link> */}
        </div>
      </div>
    </article>
  );
};

export default PlantsList;
