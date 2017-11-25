import * as Sequelize from 'sequelize'

interface ProductAttributes {
  id?: number
  name: string
  quantity: number
}

interface ProductInstance
  extends ProductAttributes,
    Sequelize.Instance<ProductAttributes> {}

export default (sequelize: Sequelize.Sequelize) => {
  const Product = sequelize.define<ProductInstance, ProductAttributes>(
    'product',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    }
  )

  return Product
}
