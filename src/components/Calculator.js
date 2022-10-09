import React ,{useState} from 'react';
import "./Calculator.css";
const Calculator = () => {
    const [result,setResult]=useState("");
    const handleclick=(e)=>{
        setResult(result.concat(e.target.name));
    }
    const clear=()=>{
        setResult("");
    }
    const backspace=()=>{
        // setResult(result.slice(0,result.length-1));
        setResult(result.slice(0,-1));
    }
    const calculate=()=>{
       try{
        setResult((eval(result)).toString());
       }catch(err){
           setResult("Error");
       }
    }
  return (
<div>
    <div id="calculator">
        <form>
            <input type="text" className="output" defaultValue={result}></input>
        </form>
        <div id="keyboard">
            <button className="operator" id="clear" onClick={clear}>C</button>
            <button className="operator" id="backspace" onClick={backspace}>CE</button>
            <button className="operator" name="%" onClick={handleclick}>%</button>
            <button className="operator" name="/" onClick={handleclick}>&divide;</button>
            <button className="number" name="7" onClick={handleclick}>7</button>
            <button className="number" name="8" onClick={handleclick}>8</button>
            <button className="number" name="9" onClick={handleclick}>9</button>
            <button className="operator" name="*" onClick={handleclick}>&times;</button>
            <button className="number" name="4" onClick={handleclick}>4</button>
            <button className="number" name="5" onClick={handleclick}>5</button>
            <button className="number" name="6" onClick={handleclick}>6</button>
            <button className="operator" name="-" onClick={handleclick}>&ndash;</button>
            <button className="number" name="3" onClick={handleclick}>3</button>
            <button className="number" name="2" onClick={handleclick}>2</button>
            <button className="number"  name="1" onClick={handleclick}>1</button>
            <button className="operator" name="+" onClick={handleclick}>+</button>
            <button className="empty" name="empty" onClick={handleclick}>$</button>
            <button className="number" name="0" onClick={handleclick}>0</button>
            <button className="number" name="." id="point" onClick={handleclick}>.</button>
            <button className="operator" name="=" onClick={calculate}>=</button>
        </div>
    </div>
</div>
  )
}

export default Calculator