import react, { useState } from 'react';

const App = () => {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    }
    return (
        <div className="">
            <div className="row justify-content-center container-content align-items-center">
                <div className="col col-lg-4 col-md-7 col-11 d-flex flex-column align-items-center text-center">
                    <h1 className="text-center text-info count-text">{count}</h1>
                    <button className="btn btn-outline-danger mt-1" onClick={increaseCount}>Count +</button>
                </div>
            </div>
        </div>
    );
}

export default App;