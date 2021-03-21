import React, { useState } from 'react'
import "../../App.scss";
import { Button } from 'react-bootstrap';
import "../SectionInfo/info.css"
import Alert from 'react-bootstrap/Alert';

export default function Posts() {
    const [blogger, setBlogger] = useState({
        name: "",
        description: "",
        email: ""
    })
    const [errors, setErrors] = useState({});
    const [details, setDetails] = useState(false);

    const onChangeHandler = (e) => {
        if ((!e.currentTarget.value || e.currentTarget.value === "") && (e.currentTarget.id === "name" || e.currentTarget.id === "description" || e.currentTarget.id === "email")) {
            setErrors({
                ...errors,
                [e.currentTarget.id]: "*Obligatoriu",
            });
        } else {
            const newErrors = { ...errors };
            delete newErrors[e.currentTarget.id];
            setErrors({
                ...newErrors,
            });
        }
        // if (e.currentTarget.id === "email") {
        //     if (!e.currentTarget.value.includes("@") || !e.currentTarget.value.includes(".com") || !e.currentTarget.value.includes(".ro")) {
        //         setErrors({
        //             ...errors,
        //             [e.currentTarget.id]: "*Email incorect",
        //         });
        //     } else {
        //         const newErrors = { ...errors };
        //         delete newErrors[e.currentTarget.id];
        //         setErrors({
        //             ...newErrors,
        //         });
        //     }

        //}
        setBlogger({
            ...blogger,
            [e.currentTarget.id]: e.currentTarget.value
        })
    }
    const handleSubmit = () => {

        if (blogger.name && blogger.email && blogger.description) {
            setDetails(true)
        }
    }
    return (
        <React.Fragment>

            <div className="containerPosts" >
                <div className="header">Our Posts</div>
                <div className="contentPosts">
                    <label htmlFor="username">Name</label>
                    <input
                        onChange={onChangeHandler}
                        type="text"
                        id="name"
                        placeholder="Name"
                    >
                    </input>
                    {errors.name && (
                        <span style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
                            {errors.name}
                        </span>
                    )}
                    <label htmlFor="username" style={{ marginTop: '10px' }}>Description</label>
                    <textarea
                        onChange={onChangeHandler}
                        type="text"
                        id="description"
                        placeholder="Your description"
                    >
                    </textarea>
                    {errors.description && (
                        <span style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
                            {errors.description}
                        </span>
                    )}
                    <label htmlFor="username" style={{ marginTop: '10px' }}>Email</label>
                    <input
                        onChange={onChangeHandler}
                        type="text"
                        id="email"
                        placeholder="Email"
                    >
                    </input>
                    {errors.email && (
                        <span style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
                            {errors.email}
                        </span>
                    )}

                </div>

                <Button variant="primary" style={{ marginTop: '10px', marginBottom: '10px' }} onClick={handleSubmit}> Submit</Button>{' '}
                <small> <i className="fa fa-info"></i> **Fill the form and press Submit</small>
                <small> <i className="fa fa-info"></i> **Complete the fields and delete it to see the error</small>

            </div>

            { details &&
                <div style={{ justifyContent: 'center', alignItems: 'center', width: '90%', margin: 'auto' }}>


                    <div className="section_item_link" style={{ justifyContent: 'center', marginTop: '20px', }}>

                        <div className="section_item_info">
                            <h5 className='section_item_text'> <i className="fa fa-user"></i> Author: {blogger.name}</h5>
                            <h6 className='section_item_text'> <i className="fa fa-file-alt"></i> Description: {blogger.description}</h6>
                            <h6 className='section_item_text'> <i className="fa fa-at"></i> Emal: {blogger.email}</h6>
                        </div>
                    </div>
                </div>
            }

            <div style={{ justifyContent: 'center', alignItems: 'center', width: '90%', margin: 'auto' }}>


                <div className="section_item_link" style={{ justifyContent: 'center', marginTop: '20px', }}>

                    <div className="section_item_info">
                        <h5 className='section_item_text'> <i className="fa fa-user"></i> Author: Emy</h5>
                        <h6 className='section_item_text'> <i className="fa fa-file-alt"></i> Description: React (also known as React.js or ReactJS) is an open-source, front end, JavaScript library[3] for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.[4][5][6] React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing.[7][8] React Router[9] is an example of such a library. And also large and complicated applications are required to make AJAX calls to fetch or mutate data. You can use any library you like with React such as Axios, JQuery AJAX or the browser built-in window.fetch. </h6>
                        <h6 className='section_item_text'> <i className="fa fa-at"></i> Emal: react@react</h6>
                    </div>
                </div>
            </div>

        </React.Fragment >
    );
}

