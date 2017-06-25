module.exports = (sequelize, DataTypes) => {
  const fields = {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    searchString: {
      type: DataTypes.STRING,
      field: 'search_string',
    },
    createdAt: { type: DataTypes.DATE, field: 'created_at' },
    updatedAt: { type: DataTypes.DATE, field: 'updated_at' },
    deletedAt: { type: DataTypes.DATE, field: 'deleted_at' },
  };

  const classMethods = {
    associate(models, klass) {

    },
  };

  return sequelize.define('Search', fields, {
    timestamps: true,
    tableName: 'searches',
    classMethods,
    paranoid: true,
  });
};
