const Input = ({setValue, name, type}) => {
    return(
     <label>
        <p>{name}</p>
        <input 
         type={type} 
         onChange={e => setValue(e.target.value)}/>
     </label>
    )
    
}
export default Input;