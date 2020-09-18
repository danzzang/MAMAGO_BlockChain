import mongoose, { Schema } from "mongoose"

const ArticleSchema = new mongoose.Schema({
  article_content: { type: String, required: true },
  article_from: { type: String, required: true },
  article_to: { type: String, required: true },
  article_start: { type: Date, required: true },
  article_end: { type: Date, required: true },
  article_egg: { type: Number, required: true },
  article_select: { type: String, default: "" },
  article_complete: { type: Boolean, default: false },
  article_created_at: { type: Date, default: Date.now() },
  article_updated_at: { type: Date, default: Date.now() },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  article_candidate: [
    {
      type: Schema.Types.ObjectId,
      ref: "Candidate",
    },
  ],
})

const ArticleModel = mongoose.model("Article", ArticleSchema)

export { ArticleModel }