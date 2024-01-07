import prisma from "../../../prisma/prisma"

export async function getInputType(id){
    return prisma.input_type.findUnique({
        where:{
            input_type_id: id
        }
    })
}

export async function getInputTypeFromQuestionType(questionTypeId){

    return prisma.question_type.findUnique({
        where:{
            question_type_id: questionTypeId
        },
        select:{
            input_type:true
        }

    })
}