import {useState} from "react"

const BoxForm = ({onFormSubmit}) =>{
    //set initial state of form to be empty
    const INITIAL_SATE = {
        backgroundColor : "",
        width : "",
        height : ""
    }


    const [formData, setFormData] = useState(INITIAL_SATE);
    
    const handleChange = evt => {
        //name = ev.target.name; evt.target.value:
        const { name, value } = evt.target;
        setFormData(data => ({
          ...data,
          [name]: value
        }));

      }   

    const handleSubmit = (e) => {
        e.preventDefault()
        onFormSubmit(formData)
        setFormData(INITIAL_SATE)
    }



    return(
        <div>
     <h1>Create a new box!</h1>

        <form onSubmit={handleSubmit}>
            <label htmlFor="backgroundColor">background color:</label>
            <input id="backgroundColor"
            name="backgroundColor" 
            type="text"
            value={formData.backgroundColor}
            onChange={handleChange}></input>

            <label htmlFor="width"> width:</label>
            <input id="width" 
            name="width" 
            type="text"
            value={formData.width}
            onChange={handleChange}></input>

            <label htmlFor="height">height:</label>
            <input id="height"
            name="height" 
            type="text"
            value={formData.height}
            onChange={handleChange}></input>
            
            <button>submit</button>
        </form>
        </div>
    )
}

export default BoxForm;