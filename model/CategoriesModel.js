import { Schema, models, model } from "mongoose";

const CatogoriesSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

let Dataset = models.categories || model("categories", CatogoriesSchema);
export default Dataset;
