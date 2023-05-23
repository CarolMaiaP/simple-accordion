import { useState } from 'react';
import '../styles/home.scss'
import { BsChevronDown } from 'react-icons/bs';

export function Accordion(){


  const [items] = useState([
    { id: 1, title: "Lorem Ipsum 1", description: "1. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique aperiam corporis id sint corrupti. Laboriosam aliquid consequuntur maiores! Rem sapiente quam odio minima provident tenetur delectus dolores dolorem doloribus laboriosam." },
    { id: 2, title: "Lorem Ipsum 2", description: "2. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique aperiam corporis id sint corrupti. Laboriosam aliquid consequuntur maiores! Rem sapiente quam odio minima provident tenetur delectus dolores dolorem doloribus laboriosam." },
    { id: 3, title: "Lorem Ipsum 3", description: "3. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique aperiam corporis id sint corrupti. Laboriosam aliquid consequuntur maiores! Rem sapiente quam odio minima provident tenetur delectus dolores dolorem doloribus laboriosam." }
  ])

  const [currentAccordion, setCurrentAccordion] = useState();

  function changeAccordion(accordionId){
    setCurrentAccordion(accordionId);
  }

  return(
    <div className="accordion">
      <h1 className="accordion__title">Título accordion</h1>
      {items.map((item) => {
        return(
          <div className="accordion__content" key={item.id}>
            <div className="accordion__content--question" onClick={() => changeAccordion(item.id)}>{item.title}<span style={{ transform: currentAccordion == item.id ? "rotate(180deg)" : "rotate(360deg)" }} className='accordion__content--icon'><BsChevronDown /></span></div>
            <div className="accordion__content--answer" style={{ opacity: currentAccordion == item.id ? 1 : 0, height: currentAccordion == item.id ? "auto" : 0, padding: currentAccordion == item.id ? "15px" : 0 }}>{item.description}</div>
          </div>
        )
      })}
      
    </div>
  )
}