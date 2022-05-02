const db = require ('../util/database')

module.exports = class Area {
  constructor(nuevo_nombre_area) {
      this.nombre_area = nuevo_nombre_area;
  }

  //Este método servirá para guardar de manera persistente el nuevo objeto.
  save() {
    return db.execute('INSERT INTO area (nombre_area) VALUES (?)',
        [this.nombre_area]);
  }

  //Este método servirá para devolver los objetos del almacenamiento persistente.
  static fetchAll() {
      return db.execute('SELECT * FROM area');
  }

}
