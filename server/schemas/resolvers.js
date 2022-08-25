const { AuthenticationError } = require('apollo-server-express');
const { User, Score } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('scores');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('scores');
    },
    scores: async (parent, { scores }) => {
      const params = scores ? { score } : {};
      return Score.find(params).sort({ score: -1 }).limit(10);
    },
    score: async (parent, { scoreId }) => {
      return Score.findOne({ _id: scoreId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('scores');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addScore: async (parent, { score }, context) => {
      console.log(context.user);
      console.log(score);
      if (context.user) {
        const theScore = await Score.create({
          score: score,
          username: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { scores: theScore._id } }
        );

        return score;
      }
      throw new AuthenticationError('You need to be logged in!');
    },


  },
};

module.exports = resolvers;
