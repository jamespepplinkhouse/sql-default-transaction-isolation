import * as Sequelize from 'sequelize'

const isolationLevel = Sequelize.Transaction.ISOLATION_LEVELS.READ_COMMITTED

const postgres = {
  database: 'test',
  username: 'test',
  password: 'test',
  options: {
    dialect: 'postgres',
    host: 'localhost',
    port: 5555,
    logging: false,
    isolationLevel
  }
}

const mysql = {
  database: 'test',
  username: 'root',
  password: 'test',
  options: {
    dialect: 'mysql',
    host: 'localhost',
    port: 5556,
    logging: false,
    isolationLevel
  }
}

export default {
  postgres,
  mysql
}
