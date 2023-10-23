import mongoose from 'mongoose';
import User from './user';
import Role from './role';

mongoose.Promise = global.Promise;

const dbModels = {
    mongoose: mongoose,
    user: User,
    role: Role,
    ROLES: ["user", "admin"]
}

export default dbModels;