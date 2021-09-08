import connectDb from "../../../utils/ConnectDb";
import Categories from "../../../model/CategoriesModel";

connectDb();

const Category = async (req, res) => {
  switch (req.method) {
    case "POST":
      await CreateCategory(req, res);
      break;
    case "GET":
      await getCategory(req, res);
      break;
  }
};

export default Category;

const CreateCategory = async (req, res) => {
  try {
    // const result  = await auth(req,res);
    // if(result.role !== 'admin'){
    //     return res.status(400).json({err:  "Authentication is not valid. "});
    // }
    const { name } = req.body;
    if (!name)
      return res.status(400).json({ err: "Name can not be left blank. " });

    const newCategory = new Categories({ name });
    await newCategory.save();
    res.json({
      msg: "Succes! created a new Category ",
      newCategory,
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

const getCategory = async (req, res) => {
  try {
    const category = await Categories.find();
    res.json({ category });
  } catch (error) {
    return res.status(500).json({ err: error.message });
  }
};
