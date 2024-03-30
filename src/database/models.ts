import { model, models, Schema } from "mongoose";

const countSchema = new Schema(
  {
    count: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const Count = models.Count || model("Count", countSchema);
