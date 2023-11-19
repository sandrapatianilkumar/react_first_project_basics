const FirstComponent = ({data,fn}) => {
  return (

    <div><button onClick={()=>{fn(10)}}>set 10</button>Count : {data}</div>
  )
}
export default FirstComponent;
