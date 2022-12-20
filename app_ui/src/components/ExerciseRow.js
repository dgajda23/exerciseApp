import React from 'react';
import { AiTwotoneEdit, AiOutlineStop } from "react-icons/ai";

function ExerciseRow({ exercise, onEdit, onDelete }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date.slice(0,10)}</td>
            <td><AiOutlineStop onClick={() => onDelete(exercise._id)} /></td>
            <td><AiTwotoneEdit onClick={() => onEdit(exercise)} /></td>
        </tr>
    );
}

export default ExerciseRow;