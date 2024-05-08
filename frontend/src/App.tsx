import { useEffect } from 'react';

import './App.css';

function App() {
    useEffect(() => {
        fetch('/api')
            .then((response) => response.json())
            .then((result) => {
                alert(`Hello ${result.hello}!`);
            });
    }, []);

    return (
        <>
            <div>
                <h1>Hanna testar backend med Typescript.</h1>
            </div>
        </>
    );
}

export default App;
