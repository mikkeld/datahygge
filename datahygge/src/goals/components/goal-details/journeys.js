import React from 'react';

const Journeys = props => {
    return (
        <div>
            <h2>Journeys for goal</h2>
            <ul>
                {
                    props.data['journey_data'].map(data => <li>{data.timestamp}: {data.label}</li>)
                }
            </ul>
        </div>
    )
};

export default Journeys;
