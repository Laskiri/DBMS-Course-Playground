-- Step 1: Drop the existing foreign key constraint (if any)
ALTER TABLE student DROP CONSTRAINT IF EXISTS student_dept_name_fkey;

-- Step 2: Add the new foreign key constraint with ON UPDATE CASCADE and ON DELETE CASCADE
ALTER TABLE student
ADD CONSTRAINT student_dept_name_fkey
FOREIGN KEY (dept_name) REFERENCES department (dept_name)
ON UPDATE CASCADE
ON DELETE CASCADE;