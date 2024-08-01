
const Category = require('../models/categoriesmodel')


// @post method for category
const AddCategory = (req, res) => {
    const data = req.body
    const name = data.name
    const description = data.description

    const newCategory = new  Category(
        {
            name : name,
            description : description
        }
    );

    newCategory
    .save()
    .then((data)=>{
        res
        .status(201)
        .json({ message: "Category added successfully", data});

})

.catch((err) => {
    res.status(500).json({ message: "Error adding category", err });
});

}

module.exports = {
    AddCategory
}
