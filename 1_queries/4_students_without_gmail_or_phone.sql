-- SELECT name, email, id, cohort_id
-- FROM students
-- WHERE phone IS NULL
-- AND email != '%@gmail.com';

-- BEST ANSWER --
SELECT name, id, email, cohort_id
FROM students
WHERE email NOT LIKE '%gmail.com'
AND phone IS NULL;