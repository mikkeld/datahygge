import React from 'react';

const Impact = props => {
    return (
        <div>
            <h2>Impact for goal</h2>
            <ul>
                {
                    props.data['impact_data'].map(data => <li>{data.label}: {data.impact}</li>)
                }
            </ul>
        </div>
    )
};

export default Impact;
