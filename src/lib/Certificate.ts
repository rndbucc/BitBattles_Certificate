import mongoose, { Schema, Document, Model } from "mongoose";

export interface ICertificate extends Document {
  "Recipient Name": string;
  "Recipient Email": string;
  "Recipient ID": string;
  "Preview Link": string;
  "Download Link": string;
  "Issue Date": string;
  "Facebook Share": string;
  "LinkedIn Share": string;
}

const CertificateSchema: Schema<ICertificate> = new Schema(
  {
    "Recipient Name": { type: String, required: true },
    "Recipient Email": { type: String, required: true },
    "Recipient ID": { type: String, required: true, unique: true },
    "Preview Link": { type: String, required: true },
    "Download Link": { type: String, required: true },
    "Issue Date": { type: String, required: true },
    "Facebook Share": { type: String, required: true },
    "LinkedIn Share": { type: String, required: true },
  },
  { collection: "certificates" } // match the MongoDB collection name
);

export const Certificate: Model<ICertificate> =
  mongoose.models.Certificate ||
  mongoose.model<ICertificate>("Certificate", CertificateSchema);
