// src/models/User.ts

import { Schema, model, models, Document, Model } from 'mongoose';

export interface IUser {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  password: string;
 createdAt?: Date;
  updatedAt?: Date;
}

interface IUserModel extends Model<IUser> {}

const UserSchema = new Schema<IUser>({ /* ... */ }, { timestamps: true });

const User = (models.User as IUserModel) || model<IUser, IUserModel>('User', UserSchema);

export default User;
