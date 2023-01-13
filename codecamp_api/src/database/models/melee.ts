import { DataTypes, Model } from 'sequelize';
import sequelize from '../instance';

interface Melee extends Model {
  id : number,
  melee_name : string,
  comment: string,
  dateStart: string,
  dateEnd: string,
  createdAt : string,
  updateAt : string
}

// creation d'un objet
const Melee = sequelize.define('Melee', {
  melee_name: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'null',
  },
  comment: {
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
  }
}, {
  tableName: 'Melee',
});

export default Melee;
