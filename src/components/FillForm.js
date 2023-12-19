import React, { useState } from 'react'
export default function FillForm(props) {
  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const colors = Array.from({ length: 100 }, generateRandomColor);
  const handleUpClick = ()=>{
    setText(text.toUpperCase());
  }


  const handleLowClick=()=>{
    setText(text.toLowerCase());
  }


  const handleColorChangeClick=()=>{
    let randomNumber = Math.floor(Math.random() * 100);
    let selectedColor=colors[randomNumber];
    setTextareaColor(selectedColor);
  }

  const handleClearAllClick=()=>{
    setText("");
  }

  const handleOnChange=(event)=>{
    setText(event.target.value);
  }

  const [text,setText]=useState("");
  const [textareaColor, setTextareaColor] = useState('black');

  return (
    <>
        <div className="mb-3 p-5 container">
            <h1><label htmlFor="text_input_field" className="form-label">{props.heading}</label></h1>
            <textarea style={{ color: textareaColor}} placeholder='Enter the text here......' onChange={handleOnChange} className="form-control" value={text} id="text_input_field" rows="10"></textarea>
            <div className="flexbox_row_align">
              <button onClick={handleUpClick} className={`btn btn-primary m-2`}>ConvertTo UPPERCASE</button>
              <button onClick={handleLowClick} className={`btn btn-primary m-2`}>ConvertTo lowercase</button>
              <button onClick={handleColorChangeClick} className={`btn btn-primary m-2`}>Change TextColor</button>
              <button onClick={handleClearAllClick}className={`btn btn-danger m-2`}>Clear All</button>
            </div>
        </div>
        <div className="mb-3 p-5 container">
            <h3>Paragraph Summary</h3>
            <p class="p-1" style={{color:textareaColor}}>No of words: <strong>{text.length===0?0:text.split(" ").length-1}</strong></p>
            <p class="p-1" style={{color:textareaColor}}>No of Characters: <strong>{text.length}</strong></p>
        </div>
    </>
  )
}
