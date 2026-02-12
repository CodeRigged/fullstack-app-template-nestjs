import { Document, Schema, model } from "mongoose"
import { Todo as TodoType } from "shared/types"

export type ITodo = TodoType & Document

const todoSchema = new Schema<ITodo>({
  completed: { default: false, type: Boolean },
  text: { required: true, type: String },
})

export const Todo = model<ITodo>("Todo", todoSchema)
