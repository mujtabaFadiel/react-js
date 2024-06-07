import React from 'react';

function OurData(props) {
    return (
        <>
            <div className='div'>{
                props.project.map(project => 
                    <div key={project}>{project}</div>)
            }</div>
            <div className='div'>{
                props.budget.map(budget => 
                    <div key={budget}>{budget}</div>)
            }</div>
            <div className='div'>{
                props.deadline.map(deadline => 
                    <div key={deadline}>{deadline}</div>)
            }</div>
            <div className='div'>{
                props.client.map(client => 
                    <div key={client}>{client}</div>)
            }</div>
        </>
    );
}

export default OurData;