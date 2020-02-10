import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import highlight from "./Highlight";
import Highlighter from "react-highlight-words";
import ReactHtmlParser from 'react-html-parser'; 

function App() {
  const [search, setSearch] = useState(["good men"]);
  const [isHighlight, setHighlight] = useState(false);
  const [removeHighlight, setRemove] = useState(false);

  const text = "<p><strong>now</strong> is the time for all good men to come to the aide of their party.</p>";
  const e = search.reduce((p,c)=>{
    return highlight(p, c);
  }, text);
  return (
    <div className="App" onContextMenu={(e)=>{
      e.preventDefault();
      e.stopPropagation();
      
      return false;
    }} onMouseUp={(e)=>{
      
      if (isHighlight){
        const s = document.getSelection();
        console.log(s, s.toString());
        if (s.toString().length > 0){
          setSearch(search.concat(s.toString()))
        }
        
        setHighlight(false);
      } else if (removeHighlight) {
        console.log('e', e, e.target.tagName)
        if (e.target.tagName.toLowerCase() === "mark"){
          console.log('remove this: ', e.target.innerText);
          setSearch(search.filter((f)=>f !== e.target.innerText));
        }
        setRemove(false);
      }
      console.log('mouse up');
    }}>
      <button onClick={()=>{
        setHighlight(!isHighlight)
      }}>{isHighlight ? "Turn Off": "Turn ON"}</button>
            <button onClick={()=>{
        setRemove(!removeHighlight)
      }}>{removeHighlight ? "Click on Highlight": "Remove"}</button>
      {ReactHtmlParser(e)}
    </div>
  );
}

export default App;
