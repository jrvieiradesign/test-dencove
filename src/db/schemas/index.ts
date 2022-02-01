import { Schema, model} from 'mongoose';

interface Url {
  url: string;
}

const schema = new Schema<Url>({
  url: { type: String, required: true },
});

export const UrlModel = model<Url>('Url', schema);