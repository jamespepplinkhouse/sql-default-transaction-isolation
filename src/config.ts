import * as Sequelize from 'sequelize'

const postgres = {
  database: 'test',
  username: 'test',
  password: 'test',
  options: {
    dialect: 'postgres',
    host: 'localhost',
    port: 5555,
    logging: true
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
    logging: true
  }
}

export default {
  postgres,
  mysql
}
