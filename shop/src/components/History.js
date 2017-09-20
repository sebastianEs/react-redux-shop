//  History Component displays History of all events happening to the user

import React from 'react';

function History(props) {
  console.log('History', props.history);
    const reverse = props.history.reverse();
    const list = reverse.map( (x, index) => <li key={index} id={x.type}>{x.type}</li>);
    return <div>
        <h2>History</h2>
        <ul>{list}</ul>
    </div>
}
export default History;