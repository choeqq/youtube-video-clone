export enum QueryKeys {
  me = "me",
  viedos = "videos",
}

export interface Me {
  _id: string;
  email: string;
  username: string;
}
