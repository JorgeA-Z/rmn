import React from 'react';
import './Boton.css';

function Boton({text, type, className, id, onClick}) {
  return (
    <div>
        <button

          type={type ? type : "Button"}
          
          className={className}
          
          id={id}
          
          onClick={onClick}
          
          >{text}

        </button>
    </div>
  );
}

export default Boton;
