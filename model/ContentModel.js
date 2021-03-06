import { Schema, models, model } from "mongoose";

const Contenido = new Schema({
  title_content: {
    type: String,
  },
  subtitle_content: {
    type: String,
  },
  Content_text: {
    type: String,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Categoria",
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
