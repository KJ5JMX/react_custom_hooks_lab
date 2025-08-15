import { useLocalStorage } from "../hooks/useLocalStorage";
function Form() {
  const [name, setName] = useLocalStorage("name", "");  
  const [serviceNumber, setServiceNumber] = useLocalStorage("serviceNumber", ""); 

  function handleSubmit(e) {
    e.preventDefault();
    alert("Form Submitted. Data is stored in localStorage");

  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          data-testid="name"
        />
      </label>
      <br />
      <label>
        Service Number:
        <input 
          type="text"
          value={serviceNumber}
          onChange={(e) => setServiceNumber(e.target.value)}
          data-testid="serviceNumber"
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}


export default Form