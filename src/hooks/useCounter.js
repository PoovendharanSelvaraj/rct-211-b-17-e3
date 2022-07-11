import { useState } from "react";

export const useCounter = (init) => {
    const [count, setCount] = useState(init.initialValue);

    const incCount = (val)=>{
        var check = count + val;
       if(val){
        
        if(count<=init.maxValue && check<=init.maxValue ){
            setCount(prev => prev+val);
        }
       }
       else{
           if(count<init.maxValue  ){
            setCount(prev => prev +1)
           }
       }
    }
    const decCount = (val)=>{
        var check = count-val;
        if(val){
           
            if(count>init.minValue && check >=init.minValue ){
                setCount(prev => prev-val)
            }
        }
        else{
            if(count>init.minValue && check >=init.minValue ){
                setCount(prev => prev-val)
            }
        }
       
    }

    return {count,incCount,decCount}
};
