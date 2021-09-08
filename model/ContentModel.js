import { Schema, models, model } from "mongoose";

const Contenido = new Schema({
  name_content: {
    type: String,
  },
  Sub_Content: {
    type: String,
  },
  Category: {
    type: Schema.Types.ObjectId,
    ref: "categories",
  },
  Image_Url: {
    type: String,
  },
  Date_Up: {
    type: Date,
    default: Date.now(),
  },
});

let Dataset = models.Content || model("Content", Contenido);
export default Dataset;
