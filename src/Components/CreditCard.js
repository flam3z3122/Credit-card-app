import React, { useState } from 'react'
import './Style.css'

const CreditCard = () => {

    const [input, setInput] = useState({
        input1: "",
        input2: "",
        input3: "",
        input4: "",
    })
    const [data, setdata] = useState([]);

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value
        setInput({ ...input, [name]: value })
        console.log(e.target.value);

        const { maxLength, id } = e.target;
        const [fieldName, fieldIndex] = id.split("-");

        let fieldIntIndex = parseInt(fieldIndex, 10);


        if (value.length >= maxLength) {

            if (fieldIntIndex < 4) {
                const nextfield = document.querySelector(
                    `input[id=text-${fieldIntIndex + 1}]`
                );

                if (nextfield !== null) {
                    nextfield.focus();
                }

            }
        }
    }


    let newid = ((data.length) + 1).toString()
    const cardInfo = [Object.values(input), newid]

    const handleSubmit = (event) => {
        console.log(input);

        if (input.input1.length + input.input2.length + input.input3.length + input.input4.length != 16) {
            alert("Card Number Should be of 16 digits");

        }
        else {
            const tempobj = {
                input1: input.input1,
                input2: input.input2,
                input3: input.input3,
                input4: input.input4,
                id: Date.now()
            }
            setdata([...data, tempobj])

            setInput({ input1: "", input2: "", input3: "", input4: "" })
        }
    }

    
    const handelDelete = (e) => {
    let id = e;
    let a = data.filter((obj) => obj.id != id)
    setdata(a)
    
 
 
 
 }
    return (
        <div>
            <fieldset className='card-fieldset'>
                <legend>Credit card</legend>

                <div id="card-number"> </div>
                <label>Card Number<span className='card-star'>*</span></label>
                <input 
                    className='card-input'
                    id='text-1'
                    style={{ margin: 10 }}
                    type="text"
                    name="input1"
                    maxLength="4"
                    value={input.input1}
                    onChange={handleChange}
                ></input>
                <input
                    className='card-input'
                    id='text-2'
                    style={{ margin: 10 }}
                    type="text"
                    name="input2"
                    maxLength="4"
                    value={input.input2}

                    onChange={handleChange}
                ></input><input
                    className='card-input'
                    id='text-3'
                    style={{ margin: 10 }}
                    type="text"
                    name="input3"
                    maxLength="4"
                    value={input.input3}

                    onChange={handleChange}
                ></input><input
                    className='card-input'
                    id='text-4'
                    style={{ margin: 10 }}
                    type="text"
                    name="input4"
                    maxLength="4"
                    value={input.input4}

                    onChange={handleChange}
                ></input>

            </fieldset>

            <button onClick={handleSubmit} className='btn-submit'>SUBMIT</button>


            {data.map((value, index) => {
                return (
                    <div key={index} className='input'>
                        <p className='input-value'> Card Number :- {value.input1} - {value.input2} - {value.input3} - {value.input4}</p>
                        <p className='delete' key={value.id} onClick={() => handelDelete(value.id)}> <i className="fa-solid fa-trash-can delete"></i></p>
                    </div>
                );
            })}



        </div>
    )
}

export default CreditCard