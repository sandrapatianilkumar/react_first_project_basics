import { useRef, useState } from "react";
import FirstComponent from "./components/FirstComponent";

const App=()=>{
  let header= "Sandra's";
  let arr = ['user1','user2','user3','user4'];
  let val='boy';
  const btnClick=()=>{
      setX(x+1);
      // console.log(x);
  }
  const [x,setX]=useState(0);

  const inputRef = useRef(null);

  const [data,setData]=useState([]);
  return(
    <div>
      {/* Variable rendering */}
      {<h1>{header}</h1>}
      {/* array of elements looping and rendering */}
       {arr.length>0 && arr.flatMap((v)=>{
        return<h2>{v}</h2>
       })}
       {/* conditional rendering */}
       {val==='boy'?<h2>It's Boy</h2>:<h2>It's girl</h2>}
       {/* {x} */}
       {/* passing function to onClick */}
       <button onClick={()=>{btnClick()}}>Click me</button>
       {/* passing props and function to child component  */}
       <FirstComponent data={x} fn={setX}/>
       {/* how to use useRef and binding to input field */}
      <input ref={inputRef} type="text"/>
      <button onClick={()=>{setData([...data,inputRef.current.value])}}>Submit</button>
      {data.map((item,index)=>{return <h2 key={index}>{item}</h2>})}
    </div>
  )
}

export default App
