module.exports = function (sequelize, DataTypes) {
  var reps = sequelize.define("reps", {
    // rep_id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true,
    //   allowNull: false,
    //   validate: {
    //     len: [1, 9]
    //   }
    // },
    // rep_email: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     isEmail: true,
    //   }
    // },
    rep_userName: {
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
    // rep_active: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    //   defaultValue: true
    // }
  },
    { timestamps: false });
  reps.associate = function (models) {
    reps.hasMany(models.customers, {
      onDelete: "CASCADE"
    });
  };
  return reps;
};
