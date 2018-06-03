import React from 'react';
import ImageGrid from './image-grid';

const Journeys = props => {
    return (
        <div>
            {
                props.data.journeys.map((journey, index) => <ImageGrid data={journey['journey_data']} title={index+1} />)
            }
        </div>
    )
};

export default Journeys;