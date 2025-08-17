const express = require('express');
const cors = require('cors'); 
const app = express();
const port = 8080;


const corsOptions = {
  origin: 'http://localhost:3000', 
  optionsSuccessStatus: 200 
};

app.use(cors(corsOptions)); 
const users = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
  { id: 3, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 4, name: 'Jane Smith', email: 'jane.smith@example.com' },
  { id: 5, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 6, name: 'Jane Smith', email: 'jane.smith@example.com' },
  { id: 7, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 8, name: 'Jane Smith', email: 'jane.smith@example.com' },
  { id: 9, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 10, name: 'Jane Smith', email: 'jane.smith@example.com' },
];


app.get('/users', (req, res) => {
  res.json(users);
});


app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId); 

  if (user) {
    res.json(user); 
  } else {
    res.status(404).json({ message: 'User not found' }); 
  }
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
