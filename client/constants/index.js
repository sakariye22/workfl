export const categories = [
    {
      id: 1,
      name: 'Pizza',
      image: require('../assets/images/pizza.png'), // Make sure this path is correct
    },
    {
      id: 2,
      name: 'Burger',
      image: require('../assets/images/pizza.png'), // Update the image file name accordingly
    },
    {
      id: 3,
      name: 'Italian',
      image: require('../assets/images/pizza.png'), // Update the image file name accordingly
    },
    {
      id: 4,
      name: 'Chinese',
      image: require('../assets/images/pizza.png'), // Update the image file name accordingly
    },
    {
      id: 5,
      name: 'Noodles',
      image: require('../assets/images/pizza.png'), // Update the image file name accordingly
    },
    {
      id: 6,
      name: 'Sweets',
      image: require('../assets/images/fullStar.png')// Update the image file name accordingly
    },
  ];

  export const featured = {
    id: 1,
    title: 'Featured Pizzas',
    description: 'The best pizzas in town',
    restaurants: [
      // Existing restaurant entry
      {
        id: 1,
        name: 'Papa Johns',
        image: require('../assets/images/fullStar.png'),
        description: 'Hot and spicy pizza',
        lng: -85.5324269,
        lat: 38.2145602,
        address: '434 Second Street',
        stars: 4,
        reviews: '4.4k',
        category: 'Fast Food',
        dishes: [
          {
            id: 1,
            name: 'Cheezy Garlic Pizza',
            description: 'Cheesy garlic flavored pizza',
            price: 10,
            image: require('../assets/images/fullStar.png'),
          },
          {
            id: 2,
            name: 'Pepperoni Pizza',
            description: 'Classic Pepperoni Pizza',
            price: 12,
            image: require('../assets/images/fullStar.png'),
          },
          // ... add more dishes if needed
        ],
      },
      // New restaurant entry
      {
        id: 2,
        name: 'Mama Mia Pizza',
        image: require('../assets/images/fullStar.png'),
        description: 'Italian family pizza',
        lng: 38.215123,
        lat: -85.533456,
        address: '350 Third Street',
        stars: 5,
        reviews: '2.3k',
        category: 'Pizza',
        dishes: [
          {
            id: 3,
            name: 'Margherita Pizza',
            description: 'Classic Margherita with fresh mozzarella and basil',
            price: 8,
            image: require('../assets/images/fullStar.png'),
          },
          {
            id: 4,
            name: 'Meat Lovers Pizza',
            description: 'Loaded with pepperoni, ham, and sausage',
            price: 12,
            image: require('../assets/images/fullStar.png'),
          },
          // ... add more dishes if needed
        ],
      },
      // ... add more restaurants as needed
    ],
  };
  