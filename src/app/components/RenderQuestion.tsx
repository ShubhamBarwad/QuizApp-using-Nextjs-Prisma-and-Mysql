import React from 'react'
import { getAllQuestions } from '../lib/QuestionService'
import Input from './Input'
import { deleteQuestionById } from '../lib/QuestionService'

async function RenderQuestion() {
    const questions = await getAllQuestions()
  return (
    <div>
        {
            questions.map((question, index) => (
                <div className='flex justify-between py-5 px-2 shadow-md my-5 border rounded-md'>
                    <div>
                        <p className='font-medium text-lg'>Q.{index+1} {question.question_text}</p>
                        <Input question={question}/>
                    </div>
                    <div className='flex flex-col items-end justify-between'>
                        <form action={deleteQuestionById}>
                            <input className='hidden' type="text" name="question_id" value={question.question_id} readOnly />
                            <input className='hidden' type="text" name="question_type_id" value={question.question_type_id} readOnly />
                            <button className='border border-black uppercase px-3 py-2 rounded-md'>delete</button>
                        </form>
                        {
                            question.question_points>0 && <p>{question.question_points} Point(s)</p>
                        }
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default RenderQuestion