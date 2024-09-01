import {
  useState,
  useRef
} from "react"; 
import "./App.css";

const App = () => {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);
 
  const plus = (e) => {
    e.preventDefault();
    const num = inputRef.current.value;
    setResult((result) => {
      return result + Number(inputRef.current.value);
    });
  };

    const minus = (e) => {
      e.preventDefault();
      const num = inputRef.current.value;
      setResult((result) => {
        return result - Number(inputRef.current.value);
      });
    };

    const times = (e) => {
      e.preventDefault();
      const num = inputRef.current.value;
      setResult((result) => {
        return result * Number(inputRef.current.value);
      });
    };

    const divide = (e) => {
      e.preventDefault();
      const num = inputRef.current.value;
      setResult((result) => {
        return result / Number(inputRef.current.value);
      });
    };

    const resetInput = (e) => {
      e.preventDefault();
      inputRef.current.value = 0;
    };

    const resetResult = (e) =>{
      e.preventDefault();
      setResult((result) => result * 0);
      inputRef.current.value = 0;
    }
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Dek's simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}>{result}</p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button> 
        <button onClick={minus}>subtract</button> 
        <button onClick={times}>multiply</button> 
        <button onClick={divide}>divive</button> 
        <button onClick={resetInput}>Reset input</button> 
        <button onClick={resetResult}>Reset result</button> 
      </form> 
    </div> 
  ); 
} 
 
export default App; 
