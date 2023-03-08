import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Button from './components/Button';

const texts = [ 'Click me!', 'Click me please!', 'Hit me!', 'Press me!' ];

function App() {
    const [ count, setCount ] = useState(0);
    const incrementCount = () => setCount(count + 1);
    const resetCount = () => setCount(0);
    const btnStyle = { backgroundColor: 'lightgreen' };

    return (<div className="App">
        <Counter count={count}/>
        {texts.map((text, idx) => {
            return <Button onClick={incrementCount} text={text} key={idx}/>;
        })}
        {count > 0 && (<div>
            <button style={btnStyle} onClick={resetCount}>Reset</button>
        </div>)}
    </div>);
}

export default App;
