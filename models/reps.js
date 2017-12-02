module.exports = function (sequelize, DataTypes) {
  var reps = sequelize.define("reps", {
    rep_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      validate: {
        len: [1, 9]
      }
    },
    rep_email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      }
    },
    rep_username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 50]
      }
    },
    rep_password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rep_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  },
    { timestamps: false });
  reps.associate = function (models) {
    reps.hasMany(models.customers, {
      onDelete: "CASCADE"
    })};
  reps.associate = function (models) {
    reps.hasMany(models.products, {
      onDelete: "CASCADE"
    })};
  reps.associate = function (models) {
      reps.hasMany(models.events, {
        onDelete: "CASCADE"
      })};
  reps.associate = function (models) {
    reps.hasMany(models.sales, {
      onDelete: "CASCADE"
    })
  };
  return reps;
};
