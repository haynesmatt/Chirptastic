  // Name: ____
  // Double Damage: Pigs, Wood, Brick, Metal
  // Color: Red, Yellow, Blue, Green

import './Forms.css'

const handleOnSubmit = (e) => {
    e.preventDefault()
    props.onSubmit(true)
}

function Forms() {

  return (
    <div className="Forms">

        <form className="nameForm" onSubmit={handleOnSubmit}>
            <h3>Name:</h3>
            <input type="text" name="name" />
            {/* value={props.postForm.name} onChange={props.handleChange} */}
            <input type="submit" value="Submit" className="action-button" />
        </form>

        <form className="doubleDamageForm" onSubmit={handleOnSubmit}>
            <h3>Double Damage:</h3>
            <select id="my-select" name="my-select">
                <option value="option0">Select Option</option>
                <option value="option1">Wood</option>
                <option value="option2">Brick</option>
                <option value="option3">Metal</option>
            </select>
        </form>

        <form className="colorForm" onSubmit={handleOnSubmit}>
            <h3>Color:</h3>
            <select id="my-select" name="my-select">
                <option value="option0">Select Option</option>
                <option value="option1">Red</option>
                <option value="option2">Yellow</option>
                <option value="option3">Blue</option>
                <option value="option3">Green</option>
            </select>
        </form>

    </div>
  )
}

export default Forms