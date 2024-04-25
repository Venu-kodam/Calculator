import React from 'react'
import Button from './Button'
const Keypad = (props) => {
  return (
    <>
    <div className='row'>
        <Button value='AC' className='btn' onClick={props.onClick}/>
        <Button value='%' className='btn' onClick={props.onClick}/>
        <Button value='DE' className='btn' onClick={props.onClick}/>
        <Button value='/' className='btn' onClick={props.onClick}/>
    </div>
    <div className='row'>
        <Button value='7' className='btn' onClick={props.onClick}/>
        <Button value='8' className='btn' onClick={props.onClick}/>
        <Button value='9' className='btn' onClick={props.onClick}/>
        <Button value='*' className='btn' onClick={props.onClick}/>
    </div>
    <div className='row'>
        <Button value='4' className='btn' onClick={props.onClick}/>
        <Button value='5' className='btn' onClick={props.onClick}/>
        <Button value='6' className='btn' onClick={props.onClick}/>
        <Button value='-' className='btn' onClick={props.onClick}/>
    </div>
    <div className='row'>
        <Button value='1' className='btn' onClick={props.onClick}/>
        <Button value='2' className='btn' onClick={props.onClick}/>
        <Button value='3' className='btn' onClick={props.onClick}/>
        <Button value='+' className='btn' onClick={props.onClick}/>
    </div>
    <div className='row'>
        <Button value='00' className='btn' onClick={props.onClick}/>
        <Button value='0' className='btn' onClick={props.onClick}/>
        <Button value='.' className='btn' onClick={props.onClick}/>
        <Button value='=' className='res' onClick={props.onClick}/>
    </div> 
    
    </>
  )
}

export default Keypad