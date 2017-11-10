module.exports = function(sequelize, DataTypes) {
    var Cal = sequelize.define("Cal", {
        calId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
              validate: {
                len: [1,10]
              }
        },
      event: {
        type: DataTypes.STRING,
        allowNull: false
      },
      startTime:{
        type: DataTypes.STRING,
        allowNull: false
      },
      endTime: {
        type: DataTypes.STRING,
        allowNull: false
      },
      note: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    });
    return Cal;
  };