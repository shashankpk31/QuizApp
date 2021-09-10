import React, { useState } from 'react';
import Footer from './Footer'
import Questions from './Questions'


export default function Quiz(props) {
    const [Marks, setMarks] = useState(0);
    const myLists = props.ques;

    const MarksCalculator = (childValue) => {
        if (childValue===null) {
            setMarks(Marks+1)
        }

    }

    const listItems = myLists.map((myList,index) =>
        <Questions key={index} markscal={MarksCalculator} quest={myList.question} ans={myList.answers} cor={myList.correct} Qid={myList.questionId}  />
    );
    return (
        <div className="card m-5 p-5">
            {listItems}
            <Footer toQ={listItems.length} marks={Marks} />
        </div>
    )
};
