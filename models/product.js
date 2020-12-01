//Geidy Ducuara Ruiz 20019082
// add mangoose
const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
	{
		title:
		{
			type: String,
			required: 'Title is required',
			trim: true
		},
		description:
		{
			type: String,
			required: 'Description is required',
			trim: true
		},
		price: Number,
		quantity: Number,
		usedProduct: {
			type: Boolean,
			default: false
		}
	
	})
// make this public
module.exports = mongoose.model('Product', productSchema)
