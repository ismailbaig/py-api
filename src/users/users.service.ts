import { Injectable } from '@nestjs/common';
import { usersDTO } from './users.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './userSchema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  async createUser(model: usersDTO) {
    const existingUser = await this.userModel.findOne({
      $or: [{ email: model.email }, { name: model.name }],
    });
    if (existingUser) {
      let errorMessage = '';
      if (existingUser.email === model.email) {
        return (errorMessage = 'Duplicate user: Email already exists.');
      } else if (existingUser.name === model.name) {
        return (errorMessage = 'Duplicate user: Name already exists.');
      }
    } else {
      // Create new user if no duplicates found
      const createdUser = new this.userModel(model);
      await createdUser.save();
      return 'User was added Successfully';
    }
  }

  async getLoggedInUserInfo(email: string) {
    const existingUser = await this.userModel.findOne({
      email: email,
    });
    return existingUser.user_id;
  }

  async findUserByEmail(email: string): Promise<User | undefined> {
    return this.userModel.findOne({ email: email }).exec();
  }
}
