import React,{useState} from "react"
import "./style.css"

const App=()=>{

    let[score,setScore]= useState(100)


    return(
        <div>
            <h1> Hey This is my Counter Application</h1>
            <h3> The value of Score is {score}</h3>
            {/* to write javascript in react we will write it in single flower braces . where css in double flower braces */}
            {/* <button onClick={()=>{setScore(score+1)}}>Increment</button> */} 
            {/* normal increment button   */}
                             <button onClick={()=>(score>=25)?"" :setScore(score+1)}>Increment</button>
            {/* if we want directly call a function we can call with single paranthesis . like onclick{setScore} , but we also need the variables
            for that we use a call back function without function name ()=>{}  . in this call back functon we will write the thing .onClick={()=>{setScore(score+1)}} */}
            {/* <button onClick={()=>{setScore(score-1)}}>Decrement</button> */}   
            {/* normal decrement button */}
                                  <button onClick={()=>(score>0)?setScore(score-1) : ""}>Decrement</button> 
            {/* it will only decrement when score is greater than 0           */}
            {/* ? means true , : means false */}
            <button onClick={()=>{setScore(0)}}>Reset</button>
        </div>
    )
}

export default App
