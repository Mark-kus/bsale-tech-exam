// Conexion a la db
const fs = require('fs');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize')
const {
    DB_USERNAME, DB_PASSWORD, DB_HOST, DB_NAME
} = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    dialect: "mysql"
});

const basename = path.basename(__filename);
const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
    .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
        modelDefiners.push(require(path.join(__dirname, '/models', file)));
    });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize, DataTypes));

// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// Deestructuramos los modelos
const { Flight, Boarding_pass, Passenger, Seat_type, Seat, Purchase, Airplane } = sequelize.models;
// Relacionamos los modelos
Boarding_pass.belongsTo(Passenger, { foreignKey: "passenger_id", })
Boarding_pass.belongsTo(Seat, { foreignKey: "seat_id", })
Boarding_pass.belongsTo(Seat_type, { foreignKey: "seat_type_id", })
Boarding_pass.belongsTo(Purchase, { foreignKey: "purchase_id", })
Flight.hasMany(Boarding_pass, { foreignKey: "flight_id", })
Flight.hasMany(Airplane, { foreignKey: "flight_id", })

module.exports = {
    ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
    conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};