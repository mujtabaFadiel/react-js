import React from 'react';
import { useEffect, useState } from 'react';

import OurData from './OurData';

function AboutUs() {
    const[data, setData] = useState([]);

    useEffect(() => {
        fetch("https://mujtabafadiel.github.io/host_api/data.json")
          .then(res => res.json())
          .then(data => {
            setData(data.WebDesign)
        })
    }, [])

    return (
        <div className='about-us'>
            <div className='container'>
                <div className="title">
                    <h4>ABOUT US</h4>
                    <h1>Know Us Better</h1>
                </div>
                <div className="containt">
                    <div className="left">
                        <div className="titles-list">
                            {data.map((data) => (
                                <div key={data.id}
                                >
                                    <div className='datatitles'>
                                        {data.title.map(title => <h4 key={title}>{title}</h4>)}
                                    </div>
                                    <span className='span'></span>
                                    <div className='data-container'>
                                        <OurData 
                                            project={data.projectTitle}
                                            budget={data.budget}
                                            deadline={data.deadline}
                                            client={data.client}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;