import React from 'react'

function Content({ logo, img, title, text, date }) {
    return (
        <div className="Content">
            <div className="left">
                <div className="top">
                    <img src={logo} alt="logo" />
                    <h1>{title}</h1>
                    <p>{text}</p>
                </div>
                <span className='bottom'>{date}</span>
            </div>
            <div className="right">
                <img src={img} alt="illustration" />
            </div>
        </div>
    )
}

export default Content
