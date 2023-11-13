-- RedefineIndex
CREATE UNIQUE INDEX `students_email_key` ON `students`(`email`);
DROP INDEX `Students_email_key` ON `students`;
