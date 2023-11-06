import { createConnection, Connection, MysqlError } from 'mysql';

const connection: Connection = createConnection({
  host: 'localhost',
  user: 'root',
  password: '', 
  port: 3306,
});

connection.connect((err: MysqlError) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL');

  connection.query('CREATE DATABASE IF NOT EXISTS testDatabase', (err: MysqlError, result: any) => {
    if (err) throw err;
    console.log('Database created or already exists');
  });
  connection.query('USE testDatabase', (err: MysqlError, result: any) => {
    if (err) throw err;
    console.log('Database Selected');
  });
  connection.query('CREATE TABLE IF NOT EXISTS students (id INT KEY AUTO_INCREMENT, name VARCHAR(255), surname VARCHAR(255), email VARCHAR(255))', (err: MysqlError, result: any) => {
    if (err) throw err;
    console.log('Table "students" created or already exists');

    const checkTableQuery = 'SELECT * FROM students LIMIT 1';

    connection.query(checkTableQuery, function (error, results) {
    if (error) {
        console.error('Błąd podczas sprawdzania tabeli:', error);
    } else {
        if (results.length > 0) {
            console.log('Table was exist');
        } else {
            const values1 = [
                ['Mateusz', 'Szortyka', 'mateusz.szortyka@gmail.com'],
                ['Mateusz', 'Szortyka', 'mateusz.szortyka@gmail.com'],
                ['Mateusz', 'Szortyka', 'mateusz.szortyka@gmail.com'],
                ['Mateusz', 'Szortyka', 'mateusz.szortyka@gmail.com'],
                ['Mateusz', 'Szortyka', 'mateusz.szortyka@gmail.com'],
                ['Mateusz', 'Szortyka', 'mateusz.szortyka@gmail.com'],
                ['Mateusz', 'Szortyka', 'mateusz.szortyka@gmail.com'],
                ['Mateusz', 'Szortyka', 'mateusz.szortyka@gmail.com'],
                ['Mateusz', 'Szortyka', 'mateusz.szortyka@gmail.com'],
                ['Mateusz', 'Szortyka', 'mateusz.szortyka@gmail.com'],
                ['Mateusz', 'Szortyka', 'mateusz.szortyka@gmail.com']
              ];
            
              let sql = 'INSERT INTO students (name, surname, email) VALUES ?';
            
              connection.query(sql, [values1], (err: MysqlError | null, result) => {
                if (err) throw err;
                console.log(`Number of records inserted in students: ${result.affectedRows}`);
              });
        }
    }
  });
  connection.query('CREATE TABLE IF NOT EXISTS formData (id INT KEY AUTO_INCREMENT, name VARCHAR(255), email VARCHAR(255), theme VARCHAR(255), content TEXT)', (err: MysqlError, result: any) => {
    if (err) throw err;
    console.log('Table "formData" created or already exists');
  });

  connection.query('CREATE TABLE IF NOT EXISTS subjects (id INT KEY AUTO_INCREMENT, name VARCHAR(255), hoursAWeek INT)', (err: MysqlError, result: any) => {
    if (err) throw err;
    console.log('Table "subjects" created or already exists');
    

    const checkTableQuery = 'SELECT * FROM subjects LIMIT 1';

    connection.query(checkTableQuery, function (error, results) {
    if (error) {
        console.error('Błąd podczas sprawdzania tabeli:', error);
    } else {
        if (results.length > 0) {
            console.log('Table was exist');
        } else {
            const values2 = [
                ['Matma', 5],
                ['Biologia', 3],
                ['Programowanie', 2],
                ['Angielski', 2],
                ['Fizyka', 4],
                ['W-F', 2],
                ['Polski', 5],
                ['Geografia', 2]
              ];
            
              const sql = 'INSERT INTO subjects (name, hoursAWeek) VALUES ?';
            
              connection.query(sql, [values2], (err: MysqlError | null, result) => {
                if (err) throw err;
                console.log(`Number of records inserted in subjects: ${result.affectedRows}`);
              });
        }
    }
    });
  });
});
});

export {connection as connectionService}
