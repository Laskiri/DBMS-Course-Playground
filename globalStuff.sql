--Finds all tables that have a column named 'dept_name'
/* SELECT table_name
FROM information_schema.columns
WHERE column_name = 'dept_name'; */


--Updates all tables that have a column named 'dept_name' to set 'Comp. Sci.' to 'Computer Science'
--Need to disable all triggeres before updating so foreign key constraints are not violated
/* DO $$
DECLARE
    r RECORD;
BEGIN
    FOR r IN
        SELECT table_name
        FROM information_schema.columns
        WHERE column_name = 'dept_name'
    LOOP
		EXECUTE 'ALTER TABLE ' || r.table_name || ' DISABLE TRIGGER ALL;';
    END LOOP;
	FOR r IN
        SELECT table_name
        FROM information_schema.columns
        WHERE column_name = 'dept_name'
    LOOP
        EXECUTE 'UPDATE ' || r.table_name || ' SET dept_name = ''Computer Science'' WHERE dept_name = ''Comp. Sci.'';';
		EXECUTE 'ALTER TABLE ' || r.table_name || ' ENABLE TRIGGER ALL;';
    END LOOP;
	
END $$; */

/* SELECT rolname
FROM pg_roles; */