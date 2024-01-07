'use client'
import React, { useState } from 'react'

function QuestionType({questionTypes}) {
  console.log(questionTypes)
    const [selectState, setSelectState] = useState();

    const handleSelectChange = (event) => {
        const questionType = getQuestionType(event);
        setSelectState(questionType);
    }

    const getQuestionType = (event) => {
        const questionTypeId = Number(event.target.value);
        const selectedObject = questionTypes.filter(type => type.question_type_id === questionTypeId);
        console.log(selectedObject)
        return selectedObject[0].question_type;
    }

  return (
    <div>
        <select onChange={handleSelectChange} className='block bg-white py-1 px-2 w-60 border capitalize mb-4' name="question_type" id="question_type" required>
            <option value="">Select A Question Type</option>
            {
              questionTypes.map(type => (
                <option key={type.question_type_id} value={type.question_type_id}>{type.question_type}</option>
              ))
            }
          </select>
          {
            selectState === 'multiple choice' &&
            <div>
              <p>Multiple Choice</p>
              <input className='block border rounded-md mb-3 p-2' placeholder='Option 1' type="text" name="option_1" id="option_1" required />
              <input className='block border rounded-md mb-3 p-2' placeholder='Option 2' type="text" name="option_2" id="option_2" required />
              <input className='block border rounded-md mb-3 p-2' placeholder='Option 3' type="text" name="option_3" id="option_3" required />
              <input className='block border rounded-md mb-3 p-2' placeholder='Option 4' type="text" name="option_4" id="option_4" required />
            </div>
          }
    </div>
  )
}

export default QuestionType