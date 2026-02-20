var pool = require('./bd');

async function getNovedades() {
    var query = 'SELECT * FROM novedades';
    var rows = await pool.query(query);
    return rows;
}

async function insertNovedad(obj) {
    var query = 'INSERT INTO novedades (titulo, subtitulo, cuerpo, img_id) VALUES (?, ?, ?, ?)';
    var rows = await pool.query(query, [obj.titulo, obj.subtitulo, obj.cuerpo, obj.img_id]);
    return rows;
}

async function deleteNovedad(id) {
    var query = 'DELETE FROM novedades WHERE id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}

async function getNovedadById(id) {
    var query = 'SELECT * FROM novedades WHERE id = ?';
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function updateNovedad(obj, id) {
    var query = 'UPDATE novedades SET titulo = ?, subtitulo = ?, cuerpo = ?, img_id = ? WHERE id = ?';
    var rows = await pool.query(query, [obj.titulo, obj.subtitulo, obj.cuerpo, obj.img_id, id]);
    return rows;
}

module.exports = { getNovedades, insertNovedad, deleteNovedad, getNovedadById, updateNovedad }