import React, { useState } from "react";

export default function TextArea(props) {
  const [text, setText] = useState("Enter Your Text Here");

  const handleUpClick = () => {
    // console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };


  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("Changes done");
    setText(event.target.value);
  };

  const handleClrClick = () => {
    setText("");
  };
  const handleCopy = () => {
    var Text = document.getElementById("container");
    Text.select();
    Text.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(Text.value);

  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }


  return (
    <>
      <section className={`text-center mt-4 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
        <h2>Just Paste Your Text Here And Make Changes </h2>
        <div className="copy-paste">
          <i class="fas fa-copy fs-1 mt-3"></i>
        </div>
        <h4 className="text-muted mt-3 mb-3"> Copy|Paste|Copy</h4>
      </section>
      <div >
        <textarea
          value={text}
          id="container"
          cols='40'
          rows='10'
          onChange={handleOnChange}
          className={`text-${props.mode === 'dark' ? 'light' : 'dark'} bg-${props.mode}`}
        ></textarea>
        <div className="ABCDE" >
          <button className="A" onClick={handleUpClick}>
            convert to Uppercase
          </button>
          <button className="B" onClick={handleLowClick}>
            convert to Lowercase
          </button>
          <button className="C" onClick={handleClrClick}>
            Clear Text
          </button>
          <button className="D" onClick={handleCopy}> Copy Text
          </button>
          <button className="E" onClick={handleExtraSpaces}>Remove Extra Spaces
          </button>
        </div>
        <div className={`my-6 text-center mt-4 text-${props.mode === 'dark' ? 'white' : 'black'}`}>
          <h3 className="my-3 "><i className="far fa-arrow-alt-circle-down mx-2"></i>Your Text Summary<i className="far fa-arrow-alt-circle-down mx-2"></i></h3>

          <hr className="" />
          <p className="mb-0 pb-3">
            <strong>{text.split(" ").filter((element) => { return element.length !== 0 }).length}</strong> Words and <strong>{text.split(" ").join("").length}</strong> Characters
          </p>
          <hr className="m-0" />
          <h3><i className="fas fa-arrow-left m-3"></i> Text Preview <i className="fas fa-arrow-right m-3"></i></h3>

          <blockquote className="blockquote text-center text-break text-muted fs-6 m-5 lead">{text.length === 0 ? "Enter something to preview here" : text}</blockquote>
        </div>
      </div>
    </>
  );
}
