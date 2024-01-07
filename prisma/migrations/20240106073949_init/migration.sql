-- CreateTable
CREATE TABLE `Question` (
    `question_id` VARCHAR(191) NOT NULL,
    `question_text` VARCHAR(191) NOT NULL,
    `question_type_id` INTEGER NOT NULL,

    PRIMARY KEY (`question_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Question_type` (
    `question_type_id` INTEGER NOT NULL AUTO_INCREMENT,
    `question_type` VARCHAR(191) NOT NULL,
    `input_type_id` INTEGER NOT NULL,

    PRIMARY KEY (`question_type_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Input_type` (
    `input_type_id` INTEGER NOT NULL AUTO_INCREMENT,
    `input_type` VARCHAR(191) NOT NULL,
    `question_type_id` INTEGER NOT NULL,

    PRIMARY KEY (`input_type_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Multiple_choice_options` (
    `options_id` INTEGER NOT NULL AUTO_INCREMENT,
    `option_text` VARCHAR(191) NOT NULL,
    `question_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`options_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Question` ADD CONSTRAINT `Question_question_type_id_fkey` FOREIGN KEY (`question_type_id`) REFERENCES `Question_type`(`question_type_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Question_type` ADD CONSTRAINT `Question_type_input_type_id_fkey` FOREIGN KEY (`input_type_id`) REFERENCES `Input_type`(`input_type_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
