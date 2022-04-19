const mongoose = require('mongoose');


const SchoolSchema = mongoose.Schema({
    school_name: {
		type: String,
		required: [true, 'please provide school name']
	},
	school_address: {
		type: String,
		required: [true, 'please provide school address']
	},
	year_of_establishment: {
		type: String,
		required: [true, 'please provide the year of establishment']
	},
	school_location: {
		type: String,
		required: [true, 'please provide school location']
	},
	school_email: {
		type: String,
		required: [true, 'please provide school microsoft email']
	},
	nos_of_classes: {
		type: String,
		required: [true, 'please provide number of classes in your school']
	},
	nos_of_pre_pry_classes: {
		type: String,
		required: [true, 'please provide number of classes in your school']
	},
	nos_of_pry_classes: {
		type: String,
		required: [true, 'please provide number of classes in your school']
	},
});

const School = module.exports = mongoose.model('School', SchoolSchema);