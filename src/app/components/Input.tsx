import React from 'react'
import { getInputTypeFromQuestionType } from '../lib/InputTypeService';
import { getMultipleChoiceOptions } from '../lib/MultipleChoiceService';
import { isMultipleChoiceQuestion } from '../lib/QuestionTypeService';

async function Input({question}) {
    const {input_type} = await getInputTypeFromQuestionType(question.question_type_id) || {input_type: null};
    let optionsArray;
    if(await isMultipleChoiceQuestion(question.question_type_id)){
      optionsArray = await getMultipleChoiceOptions(question.question_id);
    }
  return (
    <>
      { !(await isMultipleChoiceQuestion(question.question_type_id)) ?
        <input className='border py-1 px-2 rounded-sm m-1' type={input_type?.input_type}/>
        :
        <div>
          {
            optionsArray.map(option => (
              <div className='flex gap-2 my-2'>
                <input key={option.option_id} type="radio" name={`options-${question.question_id}`}/>
                <p>{option.option_text}</p>
              </div>
            ))
          }
        </div>
      }
    </>
  )
}

export default Input