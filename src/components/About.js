import React from "react";
import image from "./passport.jpg"
export default function About(props) {
  return (
    <>

      <div className="welcome">
        <i className={`far fa-grin-hearts mt-3 text-${props.mode === 'light' ? 'dark' : 'white'}`}></i>
        <p className={`text-center fs-3 fw-bold mt-1 text-${props.mode === 'light' ? 'dark' : 'white'}`}>Welcome to Textutils</p>

      </div>
      <div className={`container shadow bg-${props.mode}`}>
        <div className="row py-6">
          <div className="col-md-2 my-Image"><img src={image} alt="logo" className="img-thumbnail rounded mt-3 shadow-sm" />
            <div className={`fs-8 text-center fw-bold mb-3 mt-2 text-${props.mode === 'light' ? 'dark' : 'white'}`}>"Web Developer"</div>
          </div>
          <div className={`col-md-9  fw-bold  text-${props.mode === 'light' ? 'dark' : 'white'}`}><p className="fw-bolder mt-4">"texutils is a free platform which can be used to manipulate the text in the way you want,It enables you to paste your text in the textbox and after manipulating you can copy your text for your use"</p>
            <li>You can convert your text in Upparcase</li>
            <li>You can convert your text in Lowercase</li>
            <li>You can Remove Extra spaces in your paragraph</li>
            <li>You can clear the Textarea in just one click</li>
            <li>There is a Word counter as well as Character counter which shows the total count</li>
            <p className="fw-bolder mt-4">we are happy to help you!</p>
            <p className="text-end"><i className={`fas fa-user-circle mx-1 text-${props.mode === 'light' ? 'dark' : 'white'} `}></i>Pratik Sonone</p>
          </div>

          <div className="row py-6">
            {/* <div className="col-md-2"> <div className="text-muted fs-8 text-center fw-bold mb-3 mt-2">"Web Developer"</div></div> */}
          </div>
        </div>
      </div>


      <div className="thank-you">
        <p className={` text-center fs-3 fw-bold mt-5 text-${props.mode === 'light' ? 'dark' : 'white'}`}> Thanks For Visiting</p>
        <i className=
          {`fas fa-handshake-alt mb-5 text-${props.mode === 'light' ? 'dark' : 'white'} `}></i>
      </div>
    </>
  );
}
