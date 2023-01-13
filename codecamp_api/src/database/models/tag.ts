import { DataTypes, Model } from 'sequelize';
import sequelize from '../instance';
import TagMelee from './tag_melee';

interface Tag extends Model {
  id : number,
  tag_name : string,
  createdAt : string,
  updateAt : string
}

// creation d'un objet
const Tag = sequelize.define('Tag', {
  tag_name: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'null',
  }
}, {
  tableName: 'Tag',
});

export default Tag;
