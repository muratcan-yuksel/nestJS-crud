import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = User & HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop({
    unique: true,
    required: true,
  })
  email: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
