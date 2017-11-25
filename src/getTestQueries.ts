import sampleProducts from './database/sampleProducts'

export default models => {
  const lowerBlankaQuantity = async () => {
    const blanka = await models.Product.findOne({ where: { name: 'Blanka' } })
    blanka.quantity--
    await blanka.save()
    // console.log('blanka.quantity', blanka.quantity)
  }

  const findRandomProduct = async () => {
    const name =
      sampleProducts[Math.floor(Math.random() * sampleProducts.length)].name

    await models.Product.findOne({ where: { name } })
    // console.log(`Found ${name}!`)
  }

  const findAllProducts = async () => {
    const products = await models.Product.findAll()
    // console.log('products.length', products.length)
  }

  return [lowerBlankaQuantity, findRandomProduct, findAllProducts]
}
