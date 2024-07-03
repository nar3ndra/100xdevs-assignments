const zod = require("zod")

const todo = zod.object({
    title: zod.string({ message: "Title must be a string" }),
    description: zod.string({ message: "Description must be a string" })
    }
);

const editTodo = zod.object({
    _id: zod.string({message: "ID must be a string"}),
    title: zod.string(),
    description: zod.string(),
    completed: zod.boolean()
});

const completeTodo = zod.object({
    _id: zod.string()
})

module.exports = {
    todoValidator: todo,
    editTodoValidator: editTodo,
    completedValidator: completeTodo
}