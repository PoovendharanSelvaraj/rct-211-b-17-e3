import { useState } from "react";

import styles from "./Pagination.module.css"

export const Pagination = ({ total, selected, onPageChange }) => {
  const [pageBtn] = useState(new Array(total).fill(0));
  const [current, setCurrent] = useState(selected)
  
  var count=0;
  for(var i=0; i<total; i++){
      count+=1;
      pageBtn[i]=count;
  }
  const handlePrev=()=>{
     if(total>0 && current>1){
        setCurrent(prev => prev-1)
       onPageChange(current-1)
     }
  }
  const handleNext=()=>{
    if(current<total){
       setCurrent(prev => prev+1)
       onPageChange(current+1)
    }
 }

  return <div className={styles.pagination}>
      <div>
        <button onClick={handlePrev} >Prev</button>
        {
         pageBtn.map(item =>{
          return (
           
             <button key={item}  className={current===item?styles.selected:null} >{item}</button>        
          )
         })
        }
      <button onClick={handleNext} >next</button>
      </div>
  </div>;
};
