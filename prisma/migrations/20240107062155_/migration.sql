/*
  Warnings:

  - Added the required column `question_points` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Question` ADD COLUMN `question_points` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Multiple_choice_options` ADD CONSTRAINT `Multiple_choice_options_question_id_fkey` FOREIGN KEY (`question_id`) REFERENCES `Question`(`question_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
