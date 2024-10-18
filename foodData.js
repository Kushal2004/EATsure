const foodData = [
  { 
    category: "Afghani", 
    items: [
      { name: "Kabuli Pulao", price: "₹900", rating: 4.5, image: "https://via.placeholder.com/150" },
      { name: "Mantu", price: "₹750", rating: 4, image: "https://via.placeholder.com/150" },
      { name: "Ashak", price: "₹700", rating: 3.5, image: "https://via.placeholder.com/150" },
      { name: "Bolani", price: "₹650", rating: 3.8, image: "https://via.placeholder.com/150" },
      { name: "Chapli Kebab", price: "₹850", rating: 4.2, image: "https://via.placeholder.com/150" }
    ] 
  },
  { 
    category: "African", 
    items: [
      { name: "Jollof Rice", price: "₹600", rating: 4, image: "https://via.placeholder.com/150" },
      { name: "Fufu", price: "₹500", rating: 3, image: "https://via.placeholder.com/150" },
      { name: "Piri Piri Chicken", price: "₹750", rating: 4.3, image: "https://via.placeholder.com/150" },
      { name: "Tagine", price: "₹900", rating: 4.5, image: "https://via.placeholder.com/150" },
      { name: "Bunny Chow", price: "₹550", rating: 3.7, image: "https://via.placeholder.com/150" }
    ] 
  },
  { 
    category: "American", 
    items: [
      { name: "Hamburger", price: "₹300", rating: 4, image: "https://via.placeholder.com/150" },
      { name: "Hotdog", price: "₹250", rating: 3.5, image: "https://via.placeholder.com/150" },
      { name: "Apple Pie", price: "₹200", rating: 4.2, image: "https://via.placeholder.com/150" },
      { name: "Buffalo Wings", price: "₹400", rating: 4.3, image: "https://via.placeholder.com/150" },
      { name: "BBQ Ribs", price: "₹900", rating: 4.5, image: "https://via.placeholder.com/150" }
    ] 
  },
  { 
    category: "American Fast Food", 
    items: [
      { name: "Cheeseburger", price: "₹350", rating: 4.1, image: "https://via.placeholder.com/150" },
      { name: "French Fries", price: "₹150", rating: 4, image: "https://via.placeholder.com/150" },
      { name: "Chicken Nuggets", price: "₹300", rating: 3.8, image: "https://via.placeholder.com/150" },
      { name: "Pizza", price: "₹600", rating: 4.4, image: "https://via.placeholder.com/150" },
      { name: "Burrito", price: "₹450", rating: 4.2, image: "https://via.placeholder.com/150" }
    ] 
  },
  { 
    category: "Andhra", 
    items: [
      { name: "Hyderabadi Biryani", price: "₹800", rating: 4.6, image: "https://via.placeholder.com/150" },
      { name: "Gongura Chicken", price: "₹700", rating: 4.2, image: "https://via.placeholder.com/150" },
      { name: "Pesarattu", price: "₹300", rating: 4, image: "https://via.placeholder.com/150" },
      { name: "Royyala Iguru", price: "₹750", rating: 4.3, image: "https://via.placeholder.com/150" },
      { name: "Mirchi Bajji", price: "₹150", rating: 3.8, image: "https://via.placeholder.com/150" }
    ] 
  },
  { 
    category: "Arabian", 
    items: [
      { name: "Hummus", price: "₹250", rating: 4, image: "https://via.placeholder.com/150" },
      { name: "Falafel", price: "₹200", rating: 4.2, image: "https://via.placeholder.com/150" },
      { name: "Shawarma", price: "₹400", rating: 4.5, image: "https://via.placeholder.com/150" },
      { name: "Tabbouleh", price: "₹300", rating: 3.9, image: "https://via.placeholder.com/150" },
      { name: "Mansaf", price: "₹850", rating: 4.4, image: "https://via.placeholder.com/150" }
    ] 
  },
  { 
    category: "Steakhouse", 
    items: [
      { name: "Ribeye Steak", price: "₹1200", rating: 4.6, image: "https://via.placeholder.com/150" },
      { name: "Filet Mignon", price: "₹1500", rating: 4.8, image: "https://via.placeholder.com/150" },
      { name: "Porterhouse Steak", price: "₹1400", rating: 4.7, image: "https://via.placeholder.com/150" },
      { name: "T-Bone Steak", price: "₹1350", rating: 4.6, image: "https://via.placeholder.com/150" },
      { name: "Sirloin Steak", price: "₹1250", rating: 4.5, image: "https://via.placeholder.com/150" }
    ] 
  },
  { 
    category: "Street Food", 
    items: [
      { name: "Tacos", price: "₹250", rating: 4.3, image: "https://via.placeholder.com/150" },
      { name: "Falafel", price: "₹150", rating: 4.1, image: "https://via.placeholder.com/150" },
      { name: "Hot Dogs", price: "₹200", rating: 4, image: "https://via.placeholder.com/150" },
      { name: "Kebabs", price: "₹300", rating: 4.4, image: "https://via.placeholder.com/150" },
      { name: "Crepes", price: "₹220", rating: 4.2, image: "https://via.placeholder.com/150" }
    ] 
  },
  { 
    category: "Sushi", 
    items: [
      { name: "Nigiri", price: "₹500", rating: 4.5, image: "https://via.placeholder.com/150" },
      { name: "Sashimi", price: "₹600", rating: 4.7, image: "https://via.placeholder.com/150" },
      { name: "Maki Rolls", price: "₹550", rating: 4.6, image: "https://via.placeholder.com/150" },
      { name: "Tempura", price: "₹450", rating: 4.3, image: "https://via.placeholder.com/150" },
      { name: "Udon", price: "₹400", rating: 4.2, image: "https://via.placeholder.com/150" }
    ] 
  },
  { 
    category: "Sweets", 
    items: [
      { name: "Pastries", price: "₹150", rating: 4.3, image: "https://via.placeholder.com/150" },
      { name: "Cakes", price: "₹300", rating: 4.6, image: "https://via.placeholder.com/150" },
      { name: "Pies", price: "₹250", rating: 4.4, image: "https://via.placeholder.com/150" },
      { name: "Macarons", price: "₹200", rating: 4.5, image: "https://via.placeholder.com/150" },
      { name: "Truffles", price: "₹400", rating: 4.7, image: "https://via.placeholder.com/150" }
    ] 
  },
  { 
    category: "Sweets Desserts", 
    items: [
      { name: "Tiramisu", price: "₹350", rating: 4.6, image: "https://via.placeholder.com/150" },
      { name: "Cheesecake", price: "₹400", rating: 4.8, image: "https://via.placeholder.com/150" },
      { name: "Crème Brûlée", price: "₹450", rating: 4.7, image: "https://via.placeholder.com/150" },
      { name: "Panna Cotta", price: "₹300", rating: 4.6, image: "https://via.placeholder.com/150" },
      { name: "Chocolate Mousse", price: "₹250", rating: 4.5, image: "https://via.placeholder.com/150" }
    ] 
  },
  { 
    category: "Sweets Fast Food", 
    items: [
      { name: "Ice Cream", price: "₹100", rating: 4.4, image: "https://via.placeholder.com/150" },
      { name: "Donuts", price: "₹80", rating: 4.2, image: "https://via.placeholder.com/150" },
      { name: "Cookies", price: "₹50", rating: 4.1, image: "https://via.placeholder.com/150" },
      { name: "Milkshakes", price: "₹150", rating: 4.3, image: "https://via.placeholder.com/150" },
      { name: "Brownies", price: "₹120", rating: 4.5, image: "https://via.placeholder.com/150" }
    ] 
  },
  { 
    category: "Sweets Indian", 
    items: [
      { name: "Gulab Jamun", price: "₹50", rating: 4.6, image: "https://via.placeholder.com/150" },
      { name: "Rasgulla", price: "₹40", rating: 4.5, image: "https://via.placeholder.com/150" },
      { name: "Barfi", price: "₹60", rating: 4.4, image: "https://via.placeholder.com/150" },
      { name: "Ladoo", price: "₹50", rating: 4.3, image: "https://via.placeholder.com/150" },
      { name: "Jalebi", price: "₹30", rating: 4.2, image: "https://via.placeholder.com/150" }
    ] 
  },
  { 
    category: "Sweets Snacks", 
    items: [
      { name: "Jalebi", price: "₹30", rating: 4.2, image: "https://via.placeholder.com/150" },
      { name: "Samosa", price: "₹20", rating: 4.1, image: "https://via.placeholder.com/150" },
      { name: "Gulab Jamun", price: "₹50", rating: 4.6, image: "https://via.placeholder.com/150" },
      { name: "Kachori", price: "₹25", rating: 4.3, image: "https://via.placeholder.com/150" },
      { name: "Dhokla", price: "₹40", rating: 4.4, image: "https://via.placeholder.com/150" }
    ] 
  },
  { 
    category: "Tandoor", 
    items: [
      { name: "Tandoori Chicken", price: "₹400", rating: 4.5, image: "https://via.placeholder.com/150" },
      { name: "Tandoori Roti", price: "₹20", rating: 4.3, image: "https://via.placeholder.com/150" },
      { name: "Tandoori Paneer", price: "₹350", rating: 4.4, image: "https://via.placeholder.com/150" },
      { name: "Tandoori Naan", price: "₹30", rating: 4.2, image: "https://via.placeholder.com/150" },
      { name: "Seekh Kebab", price: "₹400", rating: 4.5, image: "https://via.placeholder.com/150" }
    ] 
  },
  { 
    category: "Telangana", 
    items: [
      { name: "Biryani", price: "₹500", rating: 4.7, image: "https://via.placeholder.com/150" },
      { name: "Gongura Mutton", price: "₹600", rating: 4.6, image: "https://via.placeholder.com/150" },
      { name: "Pesarattu", price: "₹300", rating: 4.2, image: "https://via.placeholder.com/150" },
      { name: "Hyderabadi Haleem", price: "₹450", rating: 4.5, image: "https://via.placeholder.com/150" },
      { name: "Qubani Ka Meetha", price: "₹250", rating: 4.3, image: "https://via.placeholder.com/150" }
    ] 
  },
  { 
    category: "Tex-Mex", 
    items: [
      { name: "Nachos", price: "₹250", rating: 4.3, image: "https://via.placeholder.com/150" },
      { name: "Quesadillas", price: "₹300", rating: 4.4, image: "https://via.placeholder.com/150" },
      { name: "Enchiladas", price: "₹350", rating: 4.5, image: "https://via.placeholder.com/150" },
      { name: "Burritos", price: "₹400", rating: 4.6, image: "https://via.placeholder.com/150" },
      { name: "Tacos", price: "₹250", rating: 4.3, image: "https://via.placeholder.com/150" }
    ] 
  },
  { 
    category: "Thai", 
    items: [
      { name: "Pad Thai", price: "₹350", rating: 4.5, image: "https://via.placeholder.com/150" },
      { name: "Tom Yum Soup", price: "₹300", rating: 4.4, image: "https://via.placeholder.com/150" },
      { name: "Green Curry", price: "₹400", rating: 4.6, image: "https://via.placeholder.com/150" },
      { name: "Som Tum (Papaya Salad)", price: "₹200", rating: 4.3, image: "https://via.placeholder.com/150" },
      { name: "Massaman Curry", price: "₹450", rating: 4.7, image: "https://via.placeholder.com/150" }
    ] 
  },
  { 
    category: "Thalis", 
    items: [
      { name: "Rajasthani Thali", price: "₹500", rating: 4.7, image: "https://via.placeholder.com/150" },
      { name: "Gujarati Thali", price: "₹450", rating: 4.5, image: "https://via.placeholder.com/150" },
      { name: "South Indian Thali", price: "₹400", rating: 4.4, image: "https://via.placeholder.com/150" },
      { name: "North Indian Thali", price: "₹450", rating: 4.6, image: "https://via.placeholder.com/150" },
      { name: "Bengali Thali", price: "₹550", rating: 4.8, image: "https://via.placeholder.com/150" }
    ] 
  },
  { 
    category: "Tibetan", 
    items: [
      { name: "Momos", price: "₹150", rating: 4.3, image: "https://via.placeholder.com/150" },
      { name: "Thukpa", price: "₹200", rating: 4.4, image: "https://via.placeholder.com/150" },
      { name: "Tingmo", price: "₹180", rating: 4.2, image: "https://via.placeholder.com/150" },
      { name: "Shapta", price: "₹220", rating: 4.3, image: "https://via.placeholder.com/150" },
      { name: "Phaksha Paa", price: "₹250", rating: 4.5, image: "https://via.placeholder.com/150" }
    ] 
  },
  { 
    category: "Turkish", 
    items: [
      { name: "Doner", price: "₹300", rating: 4.4, image: "https://via.placeholder.com/150" },
      { name: "Adana", price: "₹350", rating: 4.5, image: "https://via.placeholder.com/150" },
      { name: "Shish", price: "₹300", rating: 4.3, image: "https://via.placeholder.com/150" },
      { name: "Baklava", price: "₹250", rating: 4.6, image: "https://via.placeholder.com/150" },
      { name: "Koftes", price: "₹300", rating: 4.4, image: "https://via.placeholder.com/150" }
    ] 
  },
  { 
    category: "Vietnamese", 
    items: [
      { name: "Pho", price: "₹350", rating: 4.5, image: "https://via.placeholder.com/150" },
      { name: "Banh Mi", price: "₹250", rating: 4.4, image: "https://via.placeholder.com/150" },
      { name: "Spring Rolls", price: "₹200", rating: 4.3, image: "https://via.placeholder.com/150" },
      { name: "Bun Cha", price: "₹300", rating: 4.6, image: "https://via.placeholder.com/150" },
      { name: "Banh Xeo", price: "₹280", rating: 4.4, image: "https://via.placeholder.com/150" }
    ] 
  },
  { 
    category: "Waffle", 
    items: [
      { name: "Belgian Waffles", price: "₹250", rating: 4.6, image: "https://via.placeholder.com/150" },
      { name: "Liege Waffles", price: "₹300", rating: 4.5, image: "https://via.placeholder.com/150" },
      { name: "Waffle Sandwiches", price: "₹350", rating: 4.7, image: "https://via.placeholder.com/150" },
      { name: "Waffle Cones", price: "₹100", rating: 4.3, image: "https://via.placeholder.com/150" },
      { name: "Waffle Sticks", price: "₹120", rating: 4.2, image: "https://via.placeholder.com/150" }
    ] 
  }
];


  // Export the foodData object
  export { foodData };
  