import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"

import { TodoController } from "./todo.controller"
import { Todo, TodoSchema } from "./todo.schema"
import { TodoService } from "./todo.service"

@Module({
  controllers: [TodoController],
  imports: [MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }])],
  providers: [TodoService],
})
export class TodoModule {}
