import mongoose from "mongoose";
import Product from "../models/product.model.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
export const getProducts = async (req, res) => {
	try {
		const products = await Product.find({});
		res.status(200).json({ success: true, data: products });
	} catch (error) {
		console.log("error in fetching products:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
};

export const createProduct = async (req, res) => {
	const product = req.body; // user will send this data

	if (!product.name || !product.price || !product.image || !product.description) {
		return res.status(400).json({ success: false, message: "Please provide all fields" });
	}

	const newProduct = new Product(product);

	try {
		await newProduct.save();
		res.status(201).json({ success: true, data: newProduct });
	} catch (error) {
		console.error("Error in Create product:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
};

export const updateProduct = async (req, res) => {
	const { id } = req.params;

	const product = req.body;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ success: false, message: "Invalid Product Id" });
	}

	try {
		const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
		res.status(200).json({ success: true, data: updatedProduct });
	} catch (error) {
		res.status(500).json({ success: false, message: "Server Error" });
	}
};

export const deleteProduct = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ success: false, message: "Invalid Product Id" });
	}

	try {
		await Product.findByIdAndDelete(id);
		res.status(200).json({ success: true, message: "Product deleted" });
	} catch (error) {
		console.log("error in deleting product:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
};

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "akshat0104verma@gmail.com",
        pass: "kqtdwsoinwtqkpiu",
    },
})

export const sendEMail=async(req,res)=>{
    const {name,email,message}=req.body;
    const mailOptions={
        from:email,
        to:"akshat0104verma@gmail.com",
        subject:"Contact Form Submission from "+ name,
        text:message,
    }
	try {
		await transporter.sendMail(mailOptions);
		return res.status(200).json({ success: true, message: "Email sent successfully!" });
	  } catch (error) {
		console.error("Error sending email:", error);
		return res.status(500).json({ success: false, message: "Failed to send email." });
	  }
}