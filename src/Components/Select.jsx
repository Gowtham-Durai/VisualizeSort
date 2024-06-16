import { useState } from "react";
// import "../Styles/Select.css"


export default function Select(){
    const options=["Quick Sort","Merge Sort","Selective Sort"]; 
        const [selectedOption, setSelectedOption] = useState(options[0]); 
        const [isOpen, setIsOpen] = useState(false); 
       
        const handleOptionClick = (option) => { 
          setSelectedOption(option); 
          setIsOpen(false); 
        }; 
       
        const toggleSelect = () => { 
          setIsOpen((prevState) => !prevState); 
        }; 
       
        const closeAllSelect = (e) => { 
          if (!e.target.classList.contains('select-selected')) { 
            setIsOpen(false); 
          } 
        }; 
       
        return ( 
          <div className="custom-select" onClick={closeAllSelect}> 
            <div className="select-selected" onClick={toggleSelect}> 
              {selectedOption} 
            </div> 
            {isOpen && ( 
              <div className="select-items"> 
                {options.map((option, index) => ( 
                  <div key={index} onClick={() => handleOptionClick(option)}> 
                    {option} 
                  </div> 
                ))} 
              </div> 
            )} 
          </div> 
        ); 
      }
       
   

