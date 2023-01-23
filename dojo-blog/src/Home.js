import { useState } from 'react';

const Home = () => {
    // let name = 'mario'
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(26);

    const handleClick = () => {
        setName('luigi');
        setAge('53');
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;