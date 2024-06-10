import React from 'react';
import classNames from 'classnames';
import styles from './FormHomePage.module.css';
import Form from 'react-bootstrap/Form';

function FormHomePage({ headingForm, specialties, location, cities, areas }) {

  return (
    <>
      <section className={classNames('p-4', styles.form_homepage)}>
        <div className="form_info pt-2 pb-4 pe-5">
          <h3 className={styles.form_heading}>{headingForm}</h3>
          <p>Search by using one or more criteria</p>
          <div className="d-flex  align-items-center gap-3">
            <Form.Select aria-label="Speciality select">
              {specialties.map(specialty => (
                <option key={specialty.value} value={specialty.value}>
                  {specialty.label}
                </option>
              ))}
            </Form.Select>
            <Form.Select aria-label="Speciality select">
              {location.map(locations => (
                <option key={locations.value} value={locations.value}>
                  {locations.label}
                </option>
              ))}
            </Form.Select>
          </div>
          <div className="d-flex justify-content-between align-items-center gap-3 pt-4">
            <Form.Select aria-label="Speciality select">
              {cities.map(city => (
                <option key={city.value} value={city.value}>
                  {city.label}
                </option>
              ))}
            </Form.Select>
            <Form.Select aria-label="Speciality select">
              {areas.map(area => (
                <option key={area.value} value={area.value}>
                  {area.label}
                </option>
              ))}
            </Form.Select>
          </div>
          <button className='bg-dark text-white py-2 px-3 fw-semibold border-0 text-center mt-5'>GO</button>
        </div>
      </section>
    </>
  );
}

export default FormHomePage;
