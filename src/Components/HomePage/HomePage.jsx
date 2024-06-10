import React from 'react';
import './HomePage.css'
import 'swiper/css';
import 'swiper/css/navigation';
import { Carousel } from 'react-bootstrap'
import FormHomePage from '../FormHomePage/FormHomePage'
import ButtonMain from '../Button/ButtonMain'
import SpecialitiesSlider from '../SpecialitiesSlider/SpecialitiesSlider'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import banner1 from '../../Img/banner1.jpg'
import banner2 from '../../Img/banner2.jpeg'
import banner3 from '../../Img/banner3.jpeg'
import Diet from '../../Img/Diet.jpg'
import Parenting from '../../Img/Parenting-latest@aster.jpg'
import Tips from '../../Img/Tips-on-protecting-eyes_LAA.jpg'
import Neurology from '../../Img/Neurology-1.png'
import Dentistry from '../../Img/Dentistry.png'
import Nephrology1 from '../../Img/Nephrology-1.png'
import user_m from '../../Img/user_m.png'
import Cardiology from '../../Img/Cardiology.png'
import clinicalPsychology from '../../Img/Clinical-Psychology.png'
import Dermatology from '../../Img/Dermatology.png'
import Dietetics from '../../Img/Dietetics.png'
import Endocrinology from '../../Img/Endocrinology.png'
import ENT from '../../Img/ENT.png'
import FamilyMedicine from '../../Img/Family-Medicine.png'
import Gastroenterology from '../../Img/Gastroenterology.png'
import GeneralMedicine from '../../Img/General-Medicine.png'
import GeneralSurgery from '../../Img/General-Surgery.png'
import teeth from '../../Img/teeth.png'
import Obstetrics from '../../Img/Gynaecology-_-Obstetrics.png'
import IMG0508 from '../../Img/IMG_0508.png'
import InternalMedicine from '../../Img/Internal-Medicine.png'
import LaserTechnician from '../../Img/Laser-Technician.png'
import Microbiology from '../../Img/Microbiology.png'




function HomePage() {

    const specialties = [
        { value: '', label: 'Speciality' },
        { value: 'Cardiology', label: 'Cardiology' },
        { value: 'Psychology', label: 'Clinical Psychology' },
        { value: 'Dentistry', label: 'Dentistry' },
        { value: 'Dermatology', label: 'Dermatology / Cosmetology' },
        { value: 'Dietetics', label: 'Dietetics' },
        { value: 'Endocrinology', label: 'Endocrinology' },
        { value: 'Endodontics', label: 'Endodontics' },
        { value: 'ENT', label: 'ENT' },
        { value: 'Family-Medicine', label: 'Family Medicine' },
        { value: 'Gastroenterology', label: 'Gastroenterology' },
        { value: 'General-Medicine', label: 'General Medicine' },
        { value: 'General Surgery', label: 'General Surgery' },
        { value: 'Gynaecology', label: 'Gynaecology / Obstetrics' },
        { value: 'Implantology', label: 'Implantology' },
        { value: 'Internal-Medicine', label: 'Internal Medicine' },
        { value: 'Laser-Technician', label: 'Laser Technician' },
        { value: 'Microbiology', label: 'Microbiology' },
        { value: 'Nephrology', label: 'Nephrology' },
        { value: 'Neurology', label: 'Neurology' },
        { value: 'Ophthalmology', label: 'Ophthalmology' },
        { value: 'Orthodontics', label: 'Orthodontics' },
        { value: 'Orthopaedic-Surgery', label: 'Orthopaedic Surgery' },
        { value: 'Orthopaedics', label: 'Orthopaedics' },
        { value: 'Paediatric-Dentistry', label: 'Paediatric Dentistry' },
        { value: 'Paediatrics', label: 'Paediatrics' },
        { value: 'Pathology', label: 'Pathology' },
        { value: 'Pediatric-Orthopaedics', label: 'Pediatric Orthopaedics' },
        { value: 'Physiotherapy', label: 'Physiotherapy' },
        { value: 'Psychiatry', label: 'Psychiatry' },
        { value: 'Pulmonology', label: 'Pulmonology' },
        { value: 'Radiology', label: 'Radiology' },
        { value: 'Rheumatology', label: 'Rheumatology' },
        { value: 'Speech-Therapy', label: 'Speech Therapy' },
        { value: 'Sports-Dentistry', label: 'Sports Dentistry' },
        { value: 'Urology', label: 'Urology' },
    ];

    const location = [
        { value: '', label: 'Location' },
        { value: 'UAE', label: 'UAE' },
    ]

    const cities = [
        { value: '', label: 'City' },
        { value: 'Abu-Dhabi', label: 'Abu Dhabi' },
        { value: 'Ajman', label: 'Ajman' },
        { value: 'Dubai', label: 'Dubai' },
        { value: 'Fujairah', label: 'Fujairah' },
        { value: 'RAK', label: 'RAK' },
        { value: 'Sharjah', label: 'Sharjah' },
        { value: 'UAQ', label: 'UAQ' },
    ]

    const areas = [
        { value: '', label: 'Area' },
    ]

    const specialitiesData = [
        {
            imageUrl: Neurology,
            title: 'Clinical Psychology',
            description: 'Clinical Psychology',
        },
        {
            imageUrl: Dentistry,
            title: 'Dentistry',
            description: 'Dentistry',
        },
        {
            imageUrl: Nephrology1,
            title: 'Nephrology1',
            description: 'Nephrology',
        },
        {
            imageUrl: user_m,
            title: 'Dentistry',
            description: 'Dentistry',
        },
        {
            imageUrl: Cardiology,
            title: 'Cardiology',
            description: 'Cardiology',
        },
        {
            imageUrl: clinicalPsychology,
            title: 'clinicalPsychology',
            description: 'Clinical-Psychology',
        },
        {
            imageUrl: Dermatology,
            title: 'Dermatology',
            description: 'Dermatology',
        },
        {
            imageUrl: Dietetics,
            title: 'Dietetics',
            description: 'Dietetics',
        },
        {
            imageUrl: Endocrinology,
            title: 'Endocrinology',
            description: 'Endocrinology',
        },
        {
            imageUrl: ENT,
            title: 'ENT',
            description: 'ENT',
        },
        {
            imageUrl: FamilyMedicine,
            title: 'FamilyMedicine',
            description: 'Family-Medicine',
        },
        {
            imageUrl: Gastroenterology,
            title: 'Gastroenterology',
            description: 'Gastroenterology',
        },
        {
            imageUrl: GeneralMedicine,
            title: 'GeneralMedicine',
            description: 'General-Medicine',
        },
        {
            imageUrl: teeth,
            title: 'teeth',
            description: 'teeth',
        },
        {
            imageUrl: Obstetrics,
            title: 'Obstetrics',
            description: 'Gynaecology-_-Obstetrics',
        },
        {
            imageUrl: IMG0508,
            title: 'IMG_0508',
            description: 'Gynaecology-_-Obstetrics',
        },
        {
            imageUrl: GeneralSurgery,
            title: 'GeneralSurgery',
            description: 'General-Surgery',
        },
        {
            imageUrl: InternalMedicine,
            title: 'InternalMedicine',
            description: 'Internal-Medicine',
        },
        {
            imageUrl: LaserTechnician,
            title: 'LaserTechnician',
            description: 'Laser Technician',
        },
        {
            imageUrl: Microbiology,
            title: 'Microbiology',
            description: 'Microbiology',
        },


    ]

    const videosrc = 'https://www.example.com/path/to/your/video.mp4';

    return (
        <>
            <section className='carousel_section px-4 position-relative'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-100"
                            src={banner1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-100"
                            src={banner2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-100"
                            src={banner3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </section>

            <section className="home_form_section px-4 py-5">
                <div className="row">
                    <div className="col-lg-4">
                        <FormHomePage
                            headingForm="SEARCH FOR A DOCTOR"
                            specialties={specialties}
                            location={location}
                            cities={cities}
                            areas={areas}
                        />
                    </div>
                    <div className="col-lg-4">
                        <FormHomePage
                            headingForm="FIND A CLINIC"
                            specialties={specialties}
                            location={location}
                            cities={cities}
                            areas={areas}
                        />
                    </div>
                    <div className="col-lg-4 formbg d-flex justify-content-center align-items-center">
                        <ButtonMain text="Book an Online Appointment at Selected Clinics." link="#" />
                    </div>
                </div>
            </section>

            <section className='specialities px-4 pb-5'>
                <div className='specialities_info'>
                    <h5 className='specialities_info_heading fw-normal py-2 px-3 mb-5'>SPECIALITIES</h5>
                    <div className='slider_swiper_specialities container'>
                        <SpecialitiesSlider specialitiesData={specialitiesData} />
                    </div>
                </div>
            </section>

            <section className='aster_latest px-4 pb-5'>
                <div className='row'>
                    <div className="col-lg-6">
                        <h5 className='aster_latest_info fw-normal py-2 px-3 mb-5'>LATEST AT ASTER</h5>
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={0}
                            slidesPerView={1}
                            navigation
                            centeredSlides={true}
                            autoplay={{
                                delay: 500,
                            }}
                            loop

                        >
                            <SwiperSlide className='aster_latest_img' style={{ height: '500px' }}>
                                <img src={Tips} alt="" />
                            </SwiperSlide>
                            <SwiperSlide className='aster_latest_img' style={{ height: '500px' }}>
                                <img src={Diet} alt="" />
                            </SwiperSlide>
                            <SwiperSlide className='aster_latest_img' style={{ height: '500px' }}>
                                <img src={Parenting} alt="" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="col-lg-6">
                        <h5 className='aster_latest_info fw-normal py-2 px-3 mb-5'>VIDEOS</h5>
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={0}
                            slidesPerView={1}
                            navigation
                            centeredSlides={true}
                            autoplay={{
                                delay: 500,
                            }}
                            loop

                        >
                            <SwiperSlide className='aster_latest_img' style={{ height: '460px' }}>
                                <video width="320" height="240" controls autoPlay muted>
                                    <source src={videosrc} type="video/mp4" />
                                </video>
                                <a href="#" className='text-danger fs-5'>WHAT IS BENIGN PROSTATIC HYPERPLASIA (BPH)</a>
                            </SwiperSlide>
                            <SwiperSlide className='aster_latest_img' style={{ height: '460px' }}>
                                <video width="320" height="240" controls autoPlay muted>
                                    <source src={videosrc} type="video/mp4" />
                                </video>
                                <a href="#" className='text-danger fs-5'>WHAT IS BENIGN PROSTATIC HYPERPLASIA (BPH)</a>
                            </SwiperSlide>
                            <SwiperSlide className='aster_latest_img' style={{ height: '460px' }}>
                                <video width="320" height="240" controls autoPlay muted>
                                    <source src={videosrc} type="video/mp4" />
                                </video>
                                <a href="#" className='text-danger fs-5'>WHAT IS BENIGN PROSTATIC HYPERPLASIA (BPH)</a>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage
