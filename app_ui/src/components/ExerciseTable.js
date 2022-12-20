import React from 'react';
import ExerciseRow from './ExerciseRow';

function ExerciseTable({ exercises, onDelete, onEdit }) {
    return (
        <table id="exercises">
            <caption>Exercises</caption>
            <thead>
                <tr>
                    <th>Exercise</th>
                    <th>Reps</th>
                    <th>Weight Used</th>
                    <th>Units</th>
                    <th>Date</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {exercises.map((exercise, i) => 
                    <ExerciseRow 
                        exercise={exercise} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default ExerciseTable;
