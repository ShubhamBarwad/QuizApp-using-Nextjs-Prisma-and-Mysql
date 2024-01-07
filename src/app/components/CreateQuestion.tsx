import React from 'react'
import {getAllQuestionType} from '../lib/QuestionTypeService';
import addQuestionToDb from '../lib/QuestionService';
import QuestionType from './QuestionType';

async function CreateQuestion() {
  const questionTypes = await getAllQuestionType();
  
  return (
    <div>
      <form action={addQuestionToDb}>
        <label htmlFor="question_text">Question:
          <input className='block border py-1 px-2 rounded-md mb-4' type="text" name="question_text" id="question_text" required />
        </label>
        <label htmlFor="question_points">Points:
          <input className='block border py-1 px-2 rounded-md mb-4' type="number" name="question_points" required/>
        </label>
        <label htmlFor="question_type">Question Type:
          <QuestionType questionTypes={questionTypes} />
        </label>
        <button type='submit' className='border-black bg-black uppercase text-white py-2 px-2 rounded-md'>Create Question</button>
      </form>
    </div>
  )
}

export default CreateQuestion