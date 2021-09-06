import React,{useState} from 'react';
import {QuestionpropsType} from './../type/type';
import Button from '@material-ui/core/Button';
import '../App.css'

export const QuestionCard:React.FC<QuestionpropsType> = ({question,option,callback}) => {
    // console.log(question,option);
    
    let  [selectedAns, setSelectedAns] = useState('');

    const handleSelect = (e:any)   => {
        // console.log(e.target.value)
        setSelectedAns(e.target.value)
    }

    return (
        <div>
        <div className='questioncard' >

            <div className='d-flex justify-content-center mb-5 mt-5 header'>
            <h1>QUIZ APP</h1>
            </div>

            <div className='mb-4'>
            {question}
        </div>

            <form onSubmit={(e:React.FormEvent<EventTarget>)=>callback(e,selectedAns )}>
                {
                    option.map(( opt:string , ind:number ) => {
                    return(
                        <div className='mb-2' key={ind}>
                        <label style={{paddingRight: '20px'}}>
                        <input type="radio" name='opt' value={opt} 
                        required checked={ selectedAns===opt} onChange={handleSelect}/>
                        </label>
                        {opt}
                        </div>
                    )
})
                }

                <div className='d-flex justify-content-center mb-5'>
                <Button variant="contained" color='primary' type='submit'> SUBMIT</Button>
                </div>
                
            </form>

        </div></div>
    )
}
