module.exports = function (sequelize, DataTypes) {
  var products = sequelize.define("products", {
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      validate: {
        len: [1, 9]
      }
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_description: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    product_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  },
    { timestamps: true });
  products.associate = function (models) {
    products.belongsTo(models.reps, {
      onDelete: "CASCADE"
    });
  };
 
  return products;
};
