import * as Sequelize from 'sequelize'
import sampleProducts from './database/sampleProducts'

export default (sequelize, models) => {
  const lowerBlankaQuantity = async () => {
    await sequelize.transaction(async transaction => {
      const blanka = await models.Product.findOne({
        where: { name: 'Blanka' },
        lock: transaction.LOCK.UPDATE,
        transaction
      })
      blanka.quantity--

      // Do some other IO
      await new Promise(res => {
        setTimeout(res, 50)
      })

      await blanka.save({ transaction })
    })
  }

  const findRandomProduct = async () => {
    const name =
      sampleProducts[Math.floor(Math.random() * sampleProducts.length)].name

    await sequelize.transaction(async transaction => {
      await models.Product.findOne({ where: { name }, transaction })
    })
  }

  const findAllProducts = async () => {
    await sequelize.transaction(async transaction => {
      const products = await models.Product.findAll({ transaction })
    })
  }

  return [findRandomProduct, findAllProducts, lowerBlankaQuantity]
}
