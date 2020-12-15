import react from 'react';

const Count = (props) => {
    return (
        <h1 className="text-center text-info count-text">{props.countVal}</h1>
    );
}

export default Count;