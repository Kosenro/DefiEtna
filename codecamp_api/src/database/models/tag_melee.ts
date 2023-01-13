import { DataTypes, Model } from 'sequelize';
import sequelize from '../instance';
import Melee from './melee';
import Tag from './tag';

interface TagMelee extends Model {
  id : number,
  tag_id: number;
  createdAt : string,
  updateAt : string
}

// creation d'un objet
const TagMelee = sequelize.define('TagMelee', {
  tag_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  melee_id: {
    type: DataTypes.NUMBER,
    allowNull: false,
  }
}, {
  tableName: 'TagMelee',
});

Tag.hasMany(TagMelee)
Melee.hasMany(TagMelee)

export default TagMelee;
