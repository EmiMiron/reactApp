import React from 'react'
import { Link } from 'react-router-dom'

function SectionInfo({ src, text, label, path }) {
    return (
        <React.Fragment>
            <li className="section_item">
                <Link to={path} className="section_item_link">
                    <figure className="section_item_pic-wrap" data-catergory={label}>
                        <img src={src} alt="React" className="section_item_img"></img>
                    </figure>
                    <div className="section_item_info">
                        <h5 className='section_item_text'>{text}</h5>
                    </div>
                </Link>
            </li>
        </React.Fragment>
    )
}

export default SectionInfo
