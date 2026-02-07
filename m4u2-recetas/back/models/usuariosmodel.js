var pool = require('./bd'); // llamando datos BD
var md5 = require('md5');

async function getUserByUsernameAndPassword(user, password) {
  try {
    // Ver todos los usuarios que hay en la BD
    var allUsers = await pool.query('SELECT * FROM usuarios');
    console.log('=== TODOS LOS USUARIOS EN BD ===');
    console.log(allUsers);

    var query = 'select * from usuarios where usuario = ? and password = ? limit 1';
    var passwordMD5 = md5(password);

    console.log('=== BUSCANDO ===');
    console.log('Usuario:', user);
    console.log('Password MD5:', passwordMD5);

    var rows = await pool.query(query, [user, passwordMD5]);
    console.log('Encontrado:', rows[0]);
    return rows[0];
  } catch (error) {
    console.log('Error:', error);
  }
}

module.exports = { getUserByUsernameAndPassword };
