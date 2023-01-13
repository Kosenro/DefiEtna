import Melee from './routes/melees.route';
import Planning from './routes/planning.route';
import Tag from './routes/tags.route';
import TagMelee from './routes/tags_melees.route';
import UserMelee from './routes/users_melees.route';
import User from './routes/users.route'
import Promo from './routes/promotion.route'

const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use('/melee', Melee);
app.use('/tag', Tag);
app.use('/tag_melee', TagMelee);
app.use('/usermelee', UserMelee);
app.use('/planning', Planning)
app.use('/user', User)
app.use('/trombi', Promo)

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
  


