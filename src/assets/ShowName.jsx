import propTypes from 'prop-types'; // manage or control parameter

export default function ShowName({ name, show }) { // name is string and show is boolean that we input from Form.jsx
    console.log("name:",name);
    console.log("show:",show);

    return <div>{show && <h2>Your name is: {name}</h2>}</div> // if show is true, then display the name
}

ShowName.propTypes = {
    name: propTypes.string.isRequired,
    show: propTypes.bool.isRequired
};