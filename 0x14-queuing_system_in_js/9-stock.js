const express = require('express');
import { createClient } from 'redis';
import { promisify } from 'util';

const client = createClient();
const getAsync = promisify(client.get).bind(client);

const app = express();
const port = 1245;


const listProducts = [
  {
    id: 1,
    name: 'Suitecase 250',
    price: 50,
    initialAvailableQuantity: 4
  },
  {
    id: 2,
    name: 'Suitecase 450',
    price: 100,
    initialAvailableQuantity: 10
  },
  {
    id: 3,
    name: 'Suitecase 650',
    price: 350,
    initialAvailableQuantity: 2
  },
  {
    id: 4,
    name: 'Suitecase 1050',
    price: 550,
    initialAvailableQuantity: 5
  }
];

function getItemById(id) {
  return listProducts.find(product => product.id === parseInt(id));
}

function reserveStockById(itemId, stock) {
  client.set(`item.${itemId}`, stock);
}

async function getCurrentReservedStockById(itemId) {
  return await getAsync(`item.${itemId}`);
}

app.get('/list_products', (req, res) => {
  res.send(listProducts);
});

app.get('/list_products/:itemId', async (req, res) => {
  const currentProduct = getItemById(req.params.itemId);
  const currentQuantity = await getCurrentReservedStockById(req.params.itemId);

  console.log(currentQuantity);
  if (!currentProduct) {
    res.send({ status: 'Product not found' });
  }

  if (currentQuantity) currentProduct.currentQuantity = currentProduct.initialAvailableQuantity - currentQuantity;
  else currentProduct.currentQuantity = currentProduct.initialAvailableQuantity;
  res.send(currentProduct);
});

app.get('/reserve_product/:itemId', async (req, res) => {
  const currentProduct = getItemById(req.params.itemId);
  const currentQuantity = await getCurrentReservedStockById(req.params.itemId);

  if (!currentProduct) res.send({ status: 'Product not found' });
  else {
    if (currentQuantity < currentProduct.initialAvailableQuantity) {
      let stock;
      if (!currentQuantity) stock = 1;
      if (currentQuantity) stock = parseInt(currentQuantity) + 1;
      reserveStockById(req.params.itemId, stock);
      res.send({ status: 'Reservation confirmed', itemId: item.itemId });

    } else res.send({ status: 'Not enough stock available', itemId: req.params.itemId });
  }
});

app.listen(port, () => {
  console.log('Express server is running !');
});
