import React from 'react'; 
import PropTypes from 'prop-types';


const IndividualDetail = ({ name, photo }) => (
  <section> 
    <h1>{name}</h1>
    <img src={photo} />
    


  </section>
);

IndividualDetail.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  


};

export default IndividualDetail;
