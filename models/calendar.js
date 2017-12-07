module.exports = function(sequelize, DataTypes) {
    var calendar = sequelize.define("calendar", {
      calendar_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        validate: {
            len: [1,10]
          }
      },
      event_title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      start_time:{
        type: DataTypes.STRING,
        allowNull: false
      },
      end_time: {
        type: DataTypes.STRING,
        allowNull: false
      },
      note: {
        type: DataTypes.TEXT,
        allowNull: false
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
    return calendar;
  };