import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { customAlphabet } from "nanoid";
import { User } from "../user/user.model";

const nanoid = customAlphabet("1234567890abcdefghijklmnopqrstuvwxyz", 10);

export class Video {
  @prop()
  public title: string;

  @prop()
  public description: string;

  @prop({ enum: ["mp4"] })
  public extension: string;

  @prop({ required: true, ref: () => User })
  public ownder: Ref<User>;

  @prop({ unique: true, default: () => nanoid() })
  public videoId: string;

  @prop({ default: false })
  public published: boolean;
}

const VideoModel = getModelForClass(Video, {
  schemaOptions: {
    timestamps: true,
  },
});
