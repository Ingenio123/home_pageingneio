import ConnectDB from "../../../utils/ConnectDb";
import Categories from "../../../model/CategoriesModel";
import Content from "../../../model/ContenidoModel";

ConnectDB();

const ParamsIDCategories = async (req, res) => {
  switch (req.method) {
    case "PUT":
      await UpdateCategory(req, res);
      break;
    case "DELETE":
      await deleteCategory(req, res);
      break;
  }
};

export default ParamsIDCategories;

const UpdateCategory = async (req, res) => {
  try {
    // const result  = await auth(req,res);
    // if(!result !== 'admin') res.status(400).json({err: "Authentication is not valid."});

    const { id } = req.query;
    const { name } = req.body;

    const NewCategory = await Categories.findOneAndUpdate(
      { _id: id },
      { name }
    );
    res.json({
      msg: "Succes! Update  a new Category",
      category: {
        ...NewCategory._doc,
        name,
      },
    });
  } catch (error) {
    return res.status(500).json({ err: error.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    // const result  = await auth(req,res);
    // if(!result !== 'admin') res.status(400).json({err: "Authentication is not valid."});

    const { id } = req.query;

    const content = await Content.findOne({ category: id });
    if (content)
      return res.status(400).json({
        err: "Please delete  all content  with a relationship",
      });

    await Categories.findByIdAndDelete(id);
    res.json({ msg: "Succes! Deleted a category" });
  } catch (error) {
    return res.status(500).json({ err: error.message });
  }
};
