import { DataTypes, Model } from 'sequelize';
import sequelize from '../instance';

interface UserMelee extends Model {
  id : number,
  user_id : string,
  tag_id: number,
  comment : string,
  createdAt : string,
  updateAt : string
}

// creation d'un objet
const UserMelee = sequelize.define('UserMelee', {
  user_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  melee_id: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: true,
  }
}, {
  tableName: 'UserMelee',
});

export default UserMelee;
