import React from 'react'
import { useState } from 'react'
import Display from './display'
import Keypad from './Keypad'
const Calculator = () => {
    const[display,SetDisplay] = useState(0)
    const HandleButtonClick=(e)=>{
        const currentValue=e.target.value
        console.log(currentValue);
        if(display===0){   //if display is zero set to current value
            SetDisplay(currentValue)
        }
        else{              //else append previous value with current value
            SetDisplay(prev=>prev+""+currentValue)
        }
        if(currentValue==='='){
            let result = eval(display)
            SetDisplay(result)
        }
        else if(currentValue==='AC'){
            SetDisplay(0)
        }
        else if(currentValue==='DE'){
            const Svalue = display+''  //Svalue =ScreenValue
            if(Svalue>1){
                SetDisplay(Svalue.substring(0,Svalue.length-1))
            }
            else{
                SetDisplay(0)
            }
        }
    }
  return (
    <div className='calculator'>
        <Display data={display}/>
        <Keypad onClick={HandleButtonClick}/>
    </div>
  )
}

export default Calculator