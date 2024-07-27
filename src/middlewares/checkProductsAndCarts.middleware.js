import { request, response } from "express";//Import de express
import productsServices from "../services/products.services.js";//Import product services
import cartsServices from "../services/carts.services.js";//Import Cart services

export const checkProductAndCart = async (req = request, res = response, next) => {
  const { cid, pid } = req.params;//Recibimos el cart id y el product id por params
  const product = await productsServices.getById(pid);//Verificamos si el producto se encuentra por id
  const cart = await cartsServices.getCartById(cid);//Verificamos si el cart se encuentra por id

  if (!product) return res.status(404).json({ status: "Error", response: `Product with ID ${pid} doesn't found.` });//Si no se encuentra el producto retornamos error
  if (!cart) return res.status(404).json({ status: "Error", response: `Cart with ID ${cid} not found.` });//Si no se encuentra el carrito retornamos error

  next();//En el caso de que la verificacion este ok , pasa el middleware
};