
import React from 'react'
import { Link } from 'react-router-dom'
import "../../App.scss"
import { Button } from './../Button/Button';
import Footer from "../Footer/Footer";
const courses = [
    {
        title: "React Beginner",
        price: "$150",
        available: "per month",
        path: "/sign-up",
        info: "Understand the concept"
    },
    {
        title: "React Advanced Part 1",
        price: "$200",
        available: "per year",
        path: "/sign-up",
        info: "Understand the Advanced Part"
    },
    {
        title: "React Advanced Part 2",
        price: "$200",
        available: "per year",
        path: "/sign-up",
        info: "Understand the Weird Part"
    }
]
export default function Services() {
    return (
        <div>
            <div className="services_section">
                <div className="services_wrapper">
                    <h1 className="services_heading">Services</h1>
                    <div className="services_container">
                        {courses.map((course, index) =>
                            <Link to={course.path} className="services_container-card" key={index}>
                                <div className="services_container-cardInfo">
                                    <div className="icon">
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <h3>{course.title}</h3>
                                    <h4>{course.price}</h4>
                                    <p>{course.available}</p>
                                    <ul className="services_container-features">
                                        <li>{course.info}</li>

                                    </ul>
                                    <Button sizeBtn='btn--medium'>
                                        Choose your course
                               </Button>
                                </div>
                            </Link>
                        )}

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

