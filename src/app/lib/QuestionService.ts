'use server'
import { revalidatePath } from "next/cache";
import prisma from "../../../prisma/prisma";
import { createMultipleChoiceOptions } from "./MultipleChoiceService";
import { getQuestionTypeByQuestionTypeId, isMultipleChoiceQuestion } from "./QuestionTypeService";

export default async function addQuestionToDb(formData : FormData){
    try {
        const data = {
            question_text: formData.get('question_text'),
            question_type_id: Number(formData.get('question_type')),
            question_points: Number(formData.get('question_points'))
        }
    
        const question = await prisma.question.create({
            data: data
        });
    
        if(await isMultipleChoiceQuestion(formData.get('question_type'))){
            const multipleOptionsData = [
                {
                    question_id: question.question_id,
                    option_text: formData.get('option_1'),
                },
                {
                    question_id: question.question_id,
                    option_text: formData.get('option_2'),  
                },
                {
                    question_id: question.question_id,
                    option_text: formData.get('option_3'),
                },
                {
                    question_id: question.question_id,
                    option_text: formData.get('option_4'),
                }
            ];
            createMultipleChoiceOptions(multipleOptionsData);
        }  
        return {message: "Question Successfully Added"};
    } catch (error) {
        return {error: error}
    }
    
}

export async function getQuestionById(questionId : string){
    return prisma.question.findMany({
        where:{
            question_id: questionId
        }
    })
}

export async function getAllQuestions(){
    return prisma.question.findMany();
}

export async function deleteQuestionById(formData: FormData){
    const deletedQuestion = await prisma.question.delete({
        where:{
            question_id: formData.get('question_id'),
        }
    })
    if(await isMultipleChoiceQuestion(formData.get('question_type_id'))){
        const deletedOptions = await prisma.multiple_choice_options.deleteMany({
            where:{
                question_id: formData.get('question_id')
            }
        })
        console.log(deletedOptions);
    }

    revalidatePath('/');
}