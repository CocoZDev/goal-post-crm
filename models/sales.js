module.exports = function (sequelize, DataTypes) {
    var sales = sequelize.define("sales", {
        sale_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            validate: {
                len: [1, 9]
            }
        },
        sale_customer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sale_product: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sale_quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        sale_purchasePrice: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        }
    },
        { timestamps: false });
    sales.associate = function (models) {
        sales.belongsTo(models.reps, {
            onDelete: "CASCADE"
        });
    };

    return sales;
};
