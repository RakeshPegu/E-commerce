import express from 'express'
import { deleteUser, getUser, updateUser } from '../Controllers/user.Controller.js'
const route = express.Router()
route.get('/:id',getUser)
route.delete("/:id", deleteUser)
route.put("/:id", updateUser)
export default route