import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import Modal from 'react-modal';
import CourseModal from '../CourseModal'; // Import your CourseModal component

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import your images
import img1 from '../assets/image/1.jpg';
import img2 from '../assets/image/2.jpg';
import img3 from '../assets/image/3.jpg';

function Courses() {
    const coursesData = [
        {
            id: 1,
            title: 'Physics Fundamentals',
            price: 'KSh 20,000', // Updated price format
            duration: '4 Lessons / 12 weeks',
            description: 'Learn the basics of physics in this introductory course.',
        },
        {
            id: 2,
            title: 'Logo Design Workshop',
            price: 'KSh 99,000', // Updated price format
            duration: '6 Lessons / 8 weeks',
            description: 'Master the art of logo design with hands-on projects.',
        },
        {
            id: 3,
            title: 'JavaScript Programming',
            price: 'KSh 99,000', // Updated price format
            duration: '8 Lessons / 10 weeks',
            description: 'Become a JavaScript pro and build interactive websites.',
        },
        {
            id: 4,
            title: 'Advanced JavaScript',
            price: 'KSh 129,000', // Updated price format
            duration: '10 Lessons / 12 weeks',
            description: 'Take your JavaScript skills to the next level.',
        },
        // Add more courses here
    ];

    // Create a ref for each slider
    const sliderRefs = [useRef(), useRef(), useRef()];

    const settings = {
        infinite: true, // Set to true for automatic rotation
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Set autoplay speed to 3 seconds
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);

    function handlePrevClick(sliderIndex) {
        // Go to the previous slide for the specified slider
        sliderRefs[sliderIndex].current.slickPrev();
    }

    function handleNextClick(sliderIndex) {
        // Go to the next slide for the specified slider
        sliderRefs[sliderIndex].current.slickNext();
    }

    const openModal = (course) => {
        setSelectedCourse(course);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedCourse(null);
        setModalOpen(false);
    };

    const rows = Array.from({ length: 3 }, (_, rowIndex) => (
        <div key={rowIndex} className="bg-gray-100 py-10">
            <div className="container mx-auto">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="site-section courses-title" id={`courses-section-${rowIndex}`}>
                        <div className="container">
                            <div className="row mb-5 justify-content-center">
                                <div className="col-lg-7 text-center" data-aos="fade-up" data-aos-delay="">
                                    <h2 className="text-3xl font-semibold text-gray-800">Courses</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="site-section courses-entry-wrap" data-aos="fade-up" data-aos-delay="100">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <Slider ref={sliderRefs[rowIndex]} {...settings}>
                                        {coursesData.map((course) => (
                                            <div key={course.id}>
                                                <div
                                                    className="course bg-white h-96 p-4 m-2 rounded-lg shadow-md"
                                                    onClick={() => openModal(course)}
                                                >
                                                    <figure className="m-0">
                                                        <img
                                                            src={course.id === 1 ? img1 : course.id === 2 ? img2 : img3}
                                                            alt="Image"
                                                            className="w-full h-48 object-cover"
                                                        />
                                                    </figure>
                                                    <div className="course-inner-text mt-2">
                                                        <h3 className="text-xl font-semibold text-gray-800">
                                                            {course.title}
                                                        </h3>
                                                        <div className="price-box bg-green-500 text-white p-2 rounded-md">
                                                            {course.price}
                                                        </div>
                                                        <p className="text-gray-700">{course.description}</p>
                                                        {/* Rest of the code remains the same */}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-md-12 text-center">
                                    <div className="mt-4">
                                        <button
                                            className="customPrevBtn btn btn-primary m-1"
                                            onClick={() => handlePrevClick(rowIndex)}
                                        >
                                            Prev
                                        </button>
                                        <button
                                            className="customNextBtn btn btn-primary m-1"
                                            onClick={() => handleNextClick(rowIndex)}
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ));

    return (
        <>
            {rows}
            <CourseModal isOpen={isModalOpen} onRequestClose={closeModal} course={selectedCourse} />
        </>
    );
}

export default Courses;
