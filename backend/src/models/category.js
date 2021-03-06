import mongoose from 'mongoose'

const categorySchema = mongoose.Schema(
  {
    name: { type: String, unique: true, required: true },
  },
  {
    timestamps: true,
  }
)

const Category = mongoose.model('Category', categorySchema)

export default Category
