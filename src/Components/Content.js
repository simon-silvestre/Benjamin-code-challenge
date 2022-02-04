import React from 'react'

function Content({ logo, index, title, text, date }) {
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
                <div className="images" style={index === 1 ? {transform: 'translate(-422px)'} : index === 2 ? {transform: 'translate(-844px)'} : {transform: 'translate(0)'}}>
                    <img src='Images/image1.png' alt="illustration" />
                    <img src='Images/image2.png' alt="illustration" />
                    <img src='Images/image3.png' alt="illustration" />
                </div>
            </div>
        </div>
    )
}

export default Content
