import mongoose, { Schema } from 'mongoose';
import findOneOrCreate from 'mongoose-findoneorcreate';
import bcrypt from 'mongoose-bcrypt';
import timestamps from 'mongoose-timestamp';

export const UserSchema = new Schema(
	{
		name: {
			first: {
				type: String,
				trim: true,
				required: true,
			},
			last: {
				type: String,
				trim: true,
				required: true,
			},
		},
		email: {
			type: String,
			lowercase: true,
			trim: true,
			unique: true,
			required: true,
		},
		password: {
			type: String,
			required: true,
			bcrypt: true,
		},
	},
	{
		collection: 'users',
	}
);

UserSchema.plugin(findOneOrCreate);
UserSchema.plugin(bcrypt);
UserSchema.plugin(timestamps);

UserSchema.index({ createdAt: 1, updatedAt: 1 });

module.exports = exports = mongoose.model('User', UserSchema);
