import prisma from "../../../prisma/prisma"

export async function createMultipleChoiceOptions(dataArray){
    const multipleChoiceOptions = await prisma.multiple_choice_options.createMany({
        data: dataArray
    })
}

export async function getMultipleChoiceOptions(id){
    const multipleChoiceOptions = await prisma.multiple_choice_options.findMany({
        where:{
            question_id: id,
        }
    });
    return multipleChoiceOptions;
}