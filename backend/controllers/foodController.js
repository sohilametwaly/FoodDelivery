import foodModel from "../models/foodModel.js"
import fs from 'fs'

// add food item

const addFood = async (req, res) => {
    let image_filename = `${req.file.filename}`
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: image_filename,
        category: req.body.category,
       
    })

    try {
        await food.save()
        res.status(201).json({
            success: true,
            message: "Food added"
        })
    } catch(error) {
       
        res.json({ success: false, message:"Error"})
    }

}

const listFood = async(req, res) => { 
    try {
        const foods = await foodModel.find({})
        res.json({success: true,data :foods})
        
    } catch (error) { 
        
        res.json({success: false,message:"Error"})
    }
}

const removeFood = async (req, res) => {
    try {
       let id = req.params.id
        const food = await foodModel.findById(id)
        fs.unlink(`uploads/${food.image}`, () => { })

        await foodModel.findByIdAndDelete(id)
        res.json({ success: true, message: `${food.name} deleted successfully`})
    } catch (error) {
        console.log(error.message)
        res.json({success: false,message:"Error"})
    }
}


 
export { addFood ,listFood,removeFood}