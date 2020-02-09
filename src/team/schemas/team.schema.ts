import * as mongoose from 'mongoose';

export const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  country: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: String,
  isActive: Boolean,
  foundationDate: Date,
  emblem: String,
  webpage: String
});