import * as Sequelize from 'sequelize'
import Product from './product'
import reset from './reset'

export default async config => {
  const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config.options
  )

  const models = {
    Product: Product(sequelize)
  }

  await reset(sequelize, models)

  return { sequelize, models }
}
