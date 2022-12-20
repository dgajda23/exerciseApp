import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const AddExercisePage = () => {

    const [name, setName]         = useState('');
    const [reps, setReps]         = useState('');
    const [weight, setWeight]     = useState('');
    const [unit, setUnit]         = useState('');
    const [date, setDate]         = useState('');

    const history = useHistory();

    const addExercise = async () => {
        const newExercise = { name, reps, weight, unit, date };
        const response = await fetch('/exercises', {
            method: 'post',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert("Successfully added the exercise!");
        } else {
            alert(`Failed to add exercise, status code = ${response.status}`);
        }
        history.push("/");
    };

    return (
        <>
        <article>
            <h2>Add to the exercise list.</h2>
            <p>Enter the values for the exercise you completed!</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>What is the new exercise name?</legend>
                    <label for="name">Exercise Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        id="name" />
                    <br></br>
                    <label for="reps">Amount of reps</label>
                    <input
                        type="number"
                        value={reps}
                        onChange={e => setReps(e.target.value)} 
                        id="reps" />
                    <br></br>

                    <label for="weight">Weight used</label>
                    <input
                        type="number"
                        value={weight}
                        onChange={e => setWeight(e.target.value)} 
                        id="weight" />
                    <br></br>

                    <label for="unit">Unit</label>
                    <select onChange={e => setUnit(e.target.value)} id="unit">
                        <option value="">Choose the desired units</option>
                        <option value="kgs">kgs</option>
                        <option value="lbs">lbs</option>
                        <option value="miles">miles</option>
                        <option value="km">km</option>
                        
                    </select>
                    <br></br>

                    <label for="date">Date completed</label>
                    <input 
                        type = "date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                        id="date" />
                    <br></br>

                    <label for="submit">
                    <button
                        type="submit"
                        onClick={addExercise}
                        id="submit"
                    >Add</button></label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default AddExercisePage;