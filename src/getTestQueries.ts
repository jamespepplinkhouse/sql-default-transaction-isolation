import * as Sequelize from 'sequelize'
import sampleProducts from './database/sampleProducts'

export default (sequelize, models) => {
  const lowerBlankaQuantity = async () => {
    await sequelize.transaction(
      {
        isolationLevel: Sequelize.Transaction.ISOLATION_LEVELS.READ_COMMITTED
      },
      async transaction => {
        const blanka = await models.Product.findOne({
          where: { name: 'Blanka' },
          lock: transaction.LOCK.UPDATE,
          transaction
        })
        blanka.quantity--
        await blanka.save({ transaction })
      }
    )
  }

  const findRandomProduct = async () => {
    const name =
      sampleProducts[Math.floor(Math.random() * sampleProducts.length)].name

    await sequelize.transaction(
      {
        isolationLevel: Sequelize.Transaction.ISOLATION_LEVELS.READ_UNCOMMITTED
      },
      async transaction => {
        await models.Product.findOne({ where: { name }, transaction })
      }
    )
  }

  const findAllProducts = async () => {
    await sequelize.transaction(
      {
        isolationLevel: Sequelize.Transaction.ISOLATION_LEVELS.READ_UNCOMMITTED
      },
      async transaction => {
        const products = await models.Product.findAll({ transaction })
      }
    )
  }

  return [findRandomProduct, lowerBlankaQuantity, findAllProducts]
}
