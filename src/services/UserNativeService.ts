import { NativeModules } from 'react-native';
import { User, UserListResponse } from '../types/user.types';

interface UserNativeModule {
  getUsers(limit: number, skip: number): Promise<UserListResponse>;
  getUserById(userId: number): Promise<User>;
}

export const UserModule =
  NativeModules.UserModule as UserNativeModule;
