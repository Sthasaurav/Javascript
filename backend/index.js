// import express from 'express';
// const app=express();

// app.get('/api/products',(req,res)=>{
//     const products=[]
// })
// const port= process.env.PORT || 3000;
// app.listen(port,()=>{
//     console.log('Server running on port ${port}');
// });

import express from 'express';
import path from 'path';

const app = express();

// Middleware to serve static files
// app.use(express.static(path.join(__dirname, 'public')));

// API route to get the list of products
app.get('/api/products', (req, res) => {
  const products = [
    { id: 1, name: 'soap', price: 100 },
    { id: 2, name: 'noodles', price: 200 },
    { id: 3, name: 'cup', price: 300 },
  ];
  if (req.query.search){
    const filterProducts=product.filter(product=>
        product.name.include(req/query.search)
    )
    res.send(filterProducts);
  }
  res.json(products);
});

// Serve an HTML page for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
