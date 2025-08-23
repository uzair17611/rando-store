# 🛍️ RandoStore  

RandoStore is a simple online store where users can:  
- List random items for sale  
- Add items to a cart  
- Checkout items  
- Add new items through a form  

This project was built as part of the **Productbox Frontend Code Challenge**.  

---

## 🚀 Tech Stack  

- **React 19 + Vite** – modern, fast frontend setup  
- **Redux Toolkit** – state management  
- **React Router v6** – client-side routing  
- **Material UI (MUI)** – UI components  
- **Formik + Yup** – form handling and validation  
- **Axios** – API communication  
- **LocalStorage** – persistent cart  

---

## 📂 Project Structure  


src/
├── api/ # API calls with axiosInstance
├── components/ # Reusable UI components (Layout, ItemCard, CartIcon, etc.)
├── pages/ # Pages (Home, Items, Checkout)
├── shared/ # Shared inputs, dialogs
├── store/ # Redux slices and store configuration
├── utils/ # Helper functions, constants




---

## ⚡ Features  

- 🏠 Homepage with navigation  
- 📦 Items page – list of all items  
- 🛒 Cart with persistent storage  
- ➕ Add Item modal with validation  
- ✅ Checkout page with total price and remove/clear functionality  
- 🔄 Lazy loading for pages (React.lazy + Suspense)  
- 🎨 Responsive Material UI design  

---

## 🛠️ Getting Started  

### 1. Clone repo  
```bash
git clone https://github.com/uzair17611/rando-store.git
cd rando-store


npm install
npm run dev
