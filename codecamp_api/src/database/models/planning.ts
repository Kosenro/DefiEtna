import { DataTypes, Model } from 'sequelize';
import sequelize from '../instance';

interface Planning extends Model {
  id : number,
  planning_name : string,
  comment: string,
  dateStart: string,
  dateEnd: string,
  createdAt : string,
  updateAt : string
}

// creation d'un objet
const Planning = sequelize.define('Planning', {
  planning_name: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'null',
  },
  dateStart: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  dateEnd: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'null',
  }

}, {
  tableName: 'Planning',
});

export default Planning;
