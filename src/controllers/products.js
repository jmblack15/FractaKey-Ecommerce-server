import { faker } from "@faker-js/faker";
import { StatusCodes } from "http-status-codes";

const ProductsController = () => {
  const products = [];

  for (let i = 0; i < 10; i++) {
    products.push({
      id: i,
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price({ min: 10, max: 200, dec: 0, symbol: "$" }),
      image: faker.image.url(),
    });
  }

  const getAll = (req, res) => {
    return res.status(StatusCodes.OK).json(products);
  };

  return {
    getAll,
  };
};

export { ProductsController };
