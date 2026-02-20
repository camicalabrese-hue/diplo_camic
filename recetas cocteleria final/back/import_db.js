const { execSync } = require('child_process');

// Obtener el archivo SQL de los argumentos
const sqlFile = process.argv[2];

if (!sqlFile) {
    console.error('⚠️ Por favor indica el archivo SQL. Ejemplo: import.bat proyecto.sql');
    process.exit(1);
}

console.log('🔄 Obteniendo datos de conexión desde Heroku...');

try {
    // Intentamos obtener la URL directamente
    const connectionString = execSync('heroku config:get JAWSDB_URL', { encoding: 'utf8' }).trim();

    if (!connectionString || !connectionString.startsWith('mysql://')) {
        throw new Error('La URL obtenida no es válida o está vacía.');
    }

    console.log('✅ Configuración obtenida.');

    // Parsear la URL
    const url = new URL(connectionString);

    // Extraer datos limpios
    const host = url.hostname;
    const user = url.username;
    const password = url.password;
    const database = url.pathname.substring(1); // Quitar el / inicial

    console.log(`🔌 Conectando a: ${host} (BD: ${database})`);

    // Construir el comando. Usamos --ssl-mode=DISABLED para compatibilidad
    // NOTA: Se usan comillas para manejar posibles caracteres especiales en la contraseña
    const command = `mysql -h ${host} -u ${user} -p"${password}" -D ${database} --ssl-mode=DISABLED < "${sqlFile}"`;

    console.log('🚀 Ejecutando importación...');
    execSync(command, { stdio: 'inherit' });

    console.log('✨ ¡Importación finalizada con éxito!');

} catch (error) {
    console.error('❌ Error:', error.message);
    if (error.stderr) console.error(error.stderr.toString());
    process.exit(1);
}
