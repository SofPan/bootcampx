const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohort = process.argv[2];
const limit = process.argv[3];

pool.query(`
SELECT students.id as id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name LIKE '%${cohort}%'
LIMIT ${limit || 5};
`)
  .then(res => {
    res.rows.forEach(row => {
      const statement = `${row.name} has an id of ${row.id} and was in the ${row.cohort} cohort.`;
      console.log(statement);
    });
  })
  .catch(err => console.log('query error:', err.stack));