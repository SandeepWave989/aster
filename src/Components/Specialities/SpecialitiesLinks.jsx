import React from 'react';
import { Link } from 'react-router-dom';

const SpecialtyLinks = ({ specialties }) => {
  return (
    <>
      {specialties.map((specialty, index) => (
        <React.Fragment key={index}>
          <Link to={specialty.link} className="d-block fs-6 ps-2">{specialty.name}</Link><br />
        </React.Fragment>
      ))}
    </>
  );
};

export default SpecialtyLinks;
