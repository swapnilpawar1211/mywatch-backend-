// Backend for mywatch.com (production-ready small API)
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// Use the PORT environment variable (Render provides this), fall back to 5000 for local dev
const PORT = process.env.PORT || 5000;

// Mock database (replace with real DB if needed)
let watches = [
  { id: 1, name: "Titan Edge", price: 6999, desc: "Ultra slim premium watch.", img: "https://via.placeholder.com/300?text=Titan" },
  { id: 2, name: "Seiko Prospex", price: 42000, desc: "Professional diver watch.", img: "https://via.placeholder.com/300?text=Seiko" },
  { id: 3, name: "G-Shock Rangeman", price: 14999, desc: "Shock resistant outdoor watch.", img: "https://via.placeholder.com/300?text=GShock" },
  { id: 4, name: "Rolex Submariner", price: 1250000, desc: "Luxury diver masterpiece.", img: "https://via.placeholder.com/300?text=Rolex" },
  { id: 5, name: "Omega Speedmaster", price: 550000, desc: "Moon landing chronograph.", img: "https://via.placeholder.com/300?text=Omega" },
  { id: 6, name: "Tag Heuer Carrera", price: 325000, desc: "Racing sports chronograph.", img: "https://via.placeholder.com/300?text=Tag+Heuer" }
];

let cart = [];

// Get all watches
app.get('/watches', (req, res) => {
  res.json(watches);
});

// Get single watch
app.get('/watches/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const watch = watches.find(w => w.id === id);
  if (!watch) return res.status(404).json({ message: "Watch not found" });
  res.json(watch);
});

// Add to cart (simple; pushes whole watch)
app.post('/cart', (req, res) => {
  const id = req.body.id;
  const watch = watches.find(w => w.id === id);
  if (!watch) return res.status(404).json({ message: "Watch not found" });
  cart.push(watch);
  res.json({ message: "Added to cart", cart });
});

// Get cart
app.get('/cart', (req, res) => {
  res.json(cart);
});

// Clear cart
app.delete('/cart', (req, res) => {
  cart = [];
  res.json({ message: "Cart cleared" });
});

// Health check
app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
