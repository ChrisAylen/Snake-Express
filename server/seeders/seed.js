const db = require('../config/connection');
const { User, Score } = require('../models');
const userSeeds = require('./userSeeds.json');
const scoreSeeds = require('./scoreSeeds.json');

db.once('open', async () => {
  try {
    await Score.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < scoreSeeds.length; i++) {
      const { _id, username } = await Score.create(scoreSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: username },
        {
          $addToSet: {
            scores: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
