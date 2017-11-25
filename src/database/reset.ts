import sampleProducts from './sampleProducts'

export default async (sequelize, models) => {
  // Force create the database - clears existing structures and data
  console.log('database sync (force: true)')
  await sequelize.sync({ force: true })

  // Create out test data which is 16 products based on Street Fighter II characters
  console.log('bulk create products')
  await models.Product.bulkCreate(sampleProducts)
}
