module.exports = function(sequelize, DataTypes) {
  var customers = sequelize.define("customers", {
    customer_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
        validate: {
          len: [1,10]
        }
    },
    customer_firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customer_lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    customer_company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customer_street: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    customer_city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    customer_state: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    customer_zipcode: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    customer_phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    customer_email: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isEmail: true,
      }
    },
    // customer_rating: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
      // defaultValue: 0,
      // validate: {
      //   len: [1,2]
      // }
    // },
    // customer_notes: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },
    // customer_visited: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },
    // customer_active: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: true,
    //   defaultValue: true
    // }
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
  customers.associate = function(models) {
        customers.belongsTo(models.reps, {
          onDelete: "CASCADE"
        });
      };
  return customers;
};