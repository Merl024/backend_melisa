/*Consigna: Crear una clase llamada ProductManager que gestione un conjunto de productos.
Aspectos a Incluir: La clase debe crearse desde su constructor con el elemento products, 
el cual será un arreglo vacío.
Cada producto gestionado debe contar con las siguientes propiedades:
title (nombre del producto)
description (descripción del producto)
price (precio)
thumbnail (ruta de imagen)
code (código identificador)
stock (número de piezas disponibles)

Métodos a Implementar
addProduct: Este método debe agregar un producto al arreglo de productos inicial.

Debe validar que no se repita el campo code y que todos los campos sean obligatorios.

Al agregar un producto, debe crearse con un id autoincrementable.
getProducts: Este método debe devolver el arreglo con todos los productos 
creados hasta el momento.
getProductById: Este método debe buscar en el arreglo el producto que coincida con el id.
En caso de no encontrar ningún id coincidente, debe mostrar en consola el error "Not found" */

class ProductManager {
    constructor() {
      this.products = [];
      this.currentId = 0; // Inicializa el ID autoincrementable
    }
  
    addProduct(product) {
      // Verificar que todos los campos sean obligatorios
      if (!product.title || !product.description || !product.price || 
          !product.thumbnail || !product.code || !product.stock) {
        console.log("Error: Todos los campos son obligatorios");
        return;
      }
  
      // Verificar que no se repita el campo code
      const codeExists = this.products.some(p => p.code === product.code);
      if (codeExists) {
        console.log(`Error: El producto con el código ${product.code} ya existe.`);
        return;
      }
  
      // Asignar un ID autoincrementable al producto
      product.id = ++this.currentId;
  
      // Agregar el producto al arreglo
      this.products.push(product);
    }
  
    getProducts() {
      return this.products;
    }
  
    // Método que busca un producto por su ID
    getProductById(id) {
      const product = this.products.find(p => p.id === id);
      if (!product) {
        console.log("Not found"); // Muestra "Not found" si no se encuentra
        return null; // Retorna null si no se encuentra
      }
      return product; // Retorna el producto si se encuentra
    }
  }

class Product {
   constructor(title, description, price, thumbnail, code, stock) {
      this.title = title;
      this.description = description;
      this.price = price;
      this.thumbnail = thumbnail;
      this.code = code;
      this.stock = stock;
      this.id = null; // El ID se asignará al agregar el producto
    }
}
  
const product1 = new Product('Capuccino', 'En delicioso cafe caliente', 2.75,
    'imagen del capuccino', 2345, 56  )
    console.log(product1)

const product2 = new Product('Latte', 'En delicioso cafe caliente', 4.75,
    'imagen del capuccino', 2356, 57  )
    console.log(product2)