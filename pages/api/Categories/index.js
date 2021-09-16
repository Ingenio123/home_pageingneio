import nc from "next-connect";
import Categori from "../../../model/CategoriesModel";
const handler = nc();
// create Catogire
handler.post(async (req, res) => {
  const { name } = req.body;
  const NewCategori = new Categori({
    name,
  });
  await NewCategori.save();
  return res.status(200).json({
    success: true,
    message: "Ok",
  });
});

export default handler;
