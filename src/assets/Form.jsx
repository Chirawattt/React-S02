import {useState} from 'react';
import ShowName from './ShowName';

export default function Form() {
    const [name, setName] = useState('');
    const [displayName, setDisplayName] = useState(false); // name the we input in the form will be displayed if it has 5 or more characters

    const handleChange = (e) => {
        console.log(e);
        setName(e.target.value); // setName value to name variable
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // set the default action of the form to be prevented
        alert('A name was submitted: ' + name);
        console.log('A name was submitted: ' + name);

        name.length >= 5 ? setDisplayName(true) : setDisplayName(false);
    };

    return (
        <div>
            <h1>Form to Input Data</h1>
            <form>
                <label>
                    Name:
                    <input type="text" value={name} onChange={handleChange} /> 
                </label>
                <input type="submit" value="Submit" onClick={handleSubmit} />
            </form>
            <ShowName name={name} show={displayName} />
        </div>
    );
}
    
