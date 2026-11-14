import {Sequelize} from "sequelize";


// Create a new sequalize instance

const sequelize = new Sequelize(
    process.env.DB_NAME || 'test',
    process.env.DB_USER || 'root',
    process.env.DB_PASSWORD || '',
    {
        host: process.env.DB_HOST || 'localhost',
        dialect: process.env.DB_DIALECT || 'mysql',
        port: process.env.DB_PORT || 3306,
        logging: process.env.NODE_ENV === 'development'? console.log : false
    }
)

// DB connection
const dbConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connected to database');
    }catch(error) {
        console.error('Unable to connect to database',error);
    }
}
export { dbConnection, sequelize };