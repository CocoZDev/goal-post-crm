module.exports = function(sequelize, DataTypes) {
  var events = sequelize.define("events", {
    event_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
        validate: {
          len: [1,10]
        }
    },
    event_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    event_startTime:{
      type: DataTypes.STRING,
      allowNull: false
    },
    event_endTime: {
      type: DataTypes.STRING,
      allowNull: false
    },
    event_note: {
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
  events.associate = function (models) {
      events.belongsTo(models.reps, {
        onDelete: "CASCADE"
      });
    };
  return events;
};