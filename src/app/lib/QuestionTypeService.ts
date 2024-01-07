import prisma from "../../../prisma/prisma";

export async function getAllQuestionType() {
    return prisma.question_type.findMany();
}

export async function getQuestionTypeByQuestionTypeId(id){
    return prisma.question_type.findUnique({
        where:{
            question_type_id:id
        }
    })
}

export async function isMultipleChoiceQuestion(id){
    const questionTypeId = Number(id);
    const {question_type} =  await getQuestionTypeByQuestionTypeId(questionTypeId) || {question_type: null};
    return question_type === 'multiple choice'
}