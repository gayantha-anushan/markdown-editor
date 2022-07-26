import './App.css';
import { Mdjs } from 'md-js';
import { useState } from 'react';

const ipcRenderer = window.require("electron").ipcRenderer;

function App() {

  const [inputValue, setInputValue] = useState("")
  const [htmlInput, setHtmlInput] = useState("")

  const getAction = (input) => {
    setInputValue(input)
    setHtmlInput(Mdjs.md2html(input))
  }

  return (
    <div>
      <div className='header' >
        {/* header goes here */}
        <p>Markdown editor</p>
        <div className='header_button_set'>
          <button className='header_button' onClick={()=>navigator.clipboard.writeText(inputValue)}>Copy Markdown</button>
          <button className='header_button' onClick={()=>navigator.clipboard.writeText(htmlInput)}>Copy HTML</button>
        </div>
      </div>
      <div className="container">
        <div className='content_md' dangerouslySetInnerHTML={{__html:htmlInput}}>
          {/* html content of mark down */}
        </div>
        <div className='content'>
          {/* markdown input */}
          <textarea value={inputValue} className="content_input" onChange={(e)=>getAction(e.target.value)} cols="30" rows="20" type="text" ></textarea>
        </div>
      </div>
    </div>
  );
}

export default App;
