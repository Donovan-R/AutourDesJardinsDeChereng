import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import plantsData from '../plants.json';

const SinglePlant = () => {
  const [plantDetails, setPlantDetails] = useState({
    plant_name: '',
    main_img: '',
    img_inter: '',
    img_plant: '',
    harvest_date_start: '',
    harvest_date_end: '',
    plantation_date_start: '',
    plantation_date_end: '',
    plantation_details: '',
    sowing_details: '',
    crop: '',
    crop_rotation: '',
    rows_spacing_in_cm: '',
    plants_spacing_in_cm: '',
    sowing_date_start_inside: '',
    sowing_date_end_inside: '',
    sowing_date_start_outside: '',
    sowing_date_end_outside: '',
    plant_friends: '',
    plant_ennemies: '',
  });
  // console.log(window.location.pathname.charAt(13))
  // const plantId = Number(window.location.pathname.charAt(13))
  const plantId = Number(useParams().id);
  const getSinglePlant = async () => {
    try {
      const plant = plantsData.filter((plant) => plant.plant_id === plantId);

      setPlantDetails({
        plant_name: plant[0].name,
        main_img: plant[0].main_img,
        img_inter: plant[0].img_inter,
        img_plant: plant[0].img_plant,
        harvest_date_start: plant[0].harvest_date_start,
        harvest_date_end: plant[0].harvest_date_end,
        plantation_date_start: plant[0].plantation_date_start,
        plantation_date_end: plant[0].plantation_date_end,
        plantation_details: plant[0].plantation_details,
        sowing_details: plant[0].sowing_details,
        crop: plant[0].crop,
        crop_rotation: plant[0].crop_rotation,
        rows_spacing_in_cm: plant[0].rows_spacing_in_cm,
        plants_spacing_in_cm: plant[0].plants_spacing_in_cm,
        sowing_date_start_inside: plant[0].sowing_date_start_inside,
        sowing_date_end_inside: plant[0].sowing_date_end_inside,
        sowing_date_start_outside: plant[0].sowing_date_start_outside,
        sowing_date_end_outside: plant[0].sowing_date_end_outside,
        plant_friends: plant[0].plant_friends,
        plant_ennemies: plant[0].plant_ennemies,
      });
      console.log(plantDetails);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSinglePlant();
  }, [plantId]);
  const {
    plant_name,
    main_img,
    img_inter,
    img_plant,
    harvest_date_start,
    harvest_date_end,
    plantation_date_start,
    plantation_date_end,
    plantation_details,
    sowing_details,
    crop,
    crop_rotation,
    rows_spacing_in_cm,
    plants_spacing_in_cm,
    sowing_date_start_inside,
    sowing_date_end_inside,
    sowing_date_start_outside,
    sowing_date_end_outside,
    plant_friends,
    plant_ennemies,
  } = plantDetails;

  return (
    <>
      <h2>{plant_name}</h2>
      <section className='singlePlantSection'>
        <div className='plantsTitle'>
          <div className='singlePlantPictures'>
            <img
              src={img_plant}
              alt={plant_name}
              className='singlePlantPicture'
            />
            <img
              src={img_inter}
              alt={plant_name}
              className='singlePlantPicture'
            />
            <img
              src={main_img}
              alt={plant_name}
              className='singlePlantPicture'
            />
          </div>{' '}
        </div>
        <div className='underline'></div>

        <div className='plantsDetails'>
          <div className='semisDetails'>
            {sowing_date_start_inside && (
              <>
                <h3> Semis sous abri</h3>
                <p>
                  {' '}
                  Les semis se font sous abri du {
                    sowing_date_start_inside
                  } au {sowing_date_end_inside}
                </p>
              </>
            )}
            {sowing_date_start_outside && (
              <>
                <h3> Semis en pleine terre</h3>
                <p>
                  Les semis se font en pleine terre du{' '}
                  {sowing_date_start_outside} au {sowing_date_end_outside}
                </p>
              </>
            )}

            <p>{sowing_details}</p>
          </div>
          <div className='plantationDetails'>
            <h3>Plantation</h3>
            {plantation_date_start && (
              <p>
                La plantation se fait du {plantation_date_start} au{' '}
                {plantation_date_end}
              </p>
            )}
            <p>{plantation_details}</p>
            <table className='spacingDetails'>
              <thead>
                <tr>
                  <th>espace conseillé</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>entre les plants</td>
                  <td>{plants_spacing_in_cm} cm</td>
                </tr>
                <tr>
                  <td>entre les lignes</td>

                  <td>{rows_spacing_in_cm} cm</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='harvestPlant'>
            <h3>Récolte</h3>
            <p>
              La récolte se fera du {harvest_date_start} au {harvest_date_end}
            </p>
          </div>
          <div className='culturePlant'>
            <h3>Conseils pour la culture :</h3>
            <p>{crop}</p>
            {crop_rotation && (
              <>
                {' '}
                <h4>
                  <strong>Rotation des cultures :</strong>
                </h4>
                <p>{crop_rotation}</p>
              </>
            )}
          </div>

          {(plant_friends || plant_ennemies) && (
            <div className='cohabPlants'>
              <h3>Cohabitation</h3>
              {plant_friends && (
                <>
                  <h4>Ce plant pourra cohabiter avec :</h4>
                  <p> {plant_friends}</p>
                </>
              )}
              {plant_ennemies && (
                <>
                  <h4>A contrario, il vaudra mieux éviter de l'associer à :</h4>
                  <p> {plant_ennemies}</p>
                </>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default SinglePlant;
