import sequelize from './instance';
import Melee from './models/melee';
import Tag from './models/tag';
import UserMelee from './models/user_melee';
import TagMelee from './models/tag_melee';

// connection à la database
async function checkAuthenticate() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    return true;
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    return false;
  }
}

function migrate() {
  Melee.sync();
  Tag.sync();
  UserMelee.sync();
  TagMelee.sync();
}

if (checkAuthenticate() === Promise.resolve(true)) {
  migrate();
}