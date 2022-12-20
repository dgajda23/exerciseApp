import React from 'react';
import { useHistory } from "react-router-dom";
import { useState } from 'react';

export const EditExercisePage = ({ exercise }) => {
 
    const [name, setName]         = useState('');
    const [reps, setReps]         = useState('');
    const [weight, setWeight]     = useState('');
    const [unit, setUnit]         = useState('');
    const [date, setDate]         = useState(''); 
    const history = useHistory();

    const editExercise = async () => {
        const response = await fetch(`/exercises/${exercise._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                name: name,
                reps: reps,
                weight: weight,
                unit: unit,
                date: date
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert("Successfully edited document!");
        } else {
            const errMessage = await response.json();
            alert(`Failed to update document. Status ${response.status}. ${errMessage.Error}`);
        }
        history.push("/");
    }

    return (
        <>
        <article>
            <h2>Edit one of the exercises.</h2>
            <p>Enter the values that you wish to edit the exercise to.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>What is the new exercise name?</legend>
                    <label for="name">Exercise Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        id="name" />
                    
                    <label for="reps">Amount of reps</label>
                    <input
                        type="number"
                        value={reps}
                        onChange={e => setReps(e.target.value)} 
                        id="reps" />

                    <label for="weight">Weight used</label>
                    <input
                        type="number"
                        value={weight}
                        onChange={e => setWeight(e.target.value)} 
                        id="weight" />

                    <label for="unit">Unit  </label>
                    <select onChange={e => setUnit(e.target.value)} id="unit">
                        <option value="">Choose the desired units</option>
                        <option value="kgs">kgs</option>
                        <option value="lbs">lbs</option>
                        <option value="miles">miles</option>
                        <option value="km">km</option>
                    </select>                   

                    <label for="date">Date completed</label>
                    <input 
                            type = "date"
                            value={date}
                            onChange={e => setDate(e.target.value)}
                            id="date" />

                    <label for="submit">
                    <button
                        onClick={editExercise}
                        id="submit"
                    >Save</button></label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditExercisePage;