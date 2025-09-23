import axios from "axios";

const terminalWidth = process.stdout.columns;
const border = "=".repeat(terminalWidth);

// TODO: 모든 댓글 목록 조회
async function getAllcomment() {
  const response = await axios.get("https://dummyjson.com/comments");
  const data = response["data"]
  console.log(data)
}
getAllcomment();
/* 출력 결과
{
  "comments": [
    {
      "id": 1,
      "body": "This is some awesome thinking!",
      "postId": 242,
      "likes": 3,
      "user": {
        "id": 105,
        "username": "emmac",
        "fullName": "Emma Wilson"
      }
    },
    ...
  ]
}
*/
console.log(border);

// TODO: ID가 6인 게시글의 댓글 조회
async function getPostById(n) {
  const response = await axios.get('https://dummyjson.com/posts/6/comments');
  const data = response["data"]
  console.log(data)
}
getPostById(6);
/* 출력 결과
{
  "comments": [
    {
      "id": 15,
      "body": "You've shown so much growth!",
      "postId": 6, // post id is 6
      "likes": 2,
      "user": {
        "id": 17,
        "username": "evelyns",
        "fullName": "Evelyn Sanchez"
      }
    }
  ],
  "total": 1,
  "skip": 0,
  "limit": 1
}
*/
console.log(border);

// TODO: 랜덤 할일 조회
async function randomTodo() {
  const response = await axios.get('https://dummyjson.com/todos/random')
  const data = response["data"]
  console.log(data)
}
randomTodo();
/* 출력 결과
{
  // random result, will be changed on every call to /random
  "id": 127,
  "todo": "Prepare a dish from a foreign culture",
  "completed": false,
  "userId": 7
}
*/
console.log(border);

// TODO: 상품 종류 목록 조회

/* 출력 결과
[
  "beauty",
  "fragrances",
  "furniture",
  "groceries",
  "home-decoration",
  "kitchen-accessories",
  "laptops",
  ...
]
*/
console.log(border);

// TODO: 랜덤 인용문(quote) 조회
async function Randomquoto() {
  const response = await axios.get('https://dummyjson.com/quotes/random')
  const data = response["data"]
  console.log(data)
}
Randomquoto()
/* 출력 결과
{
  // random result, will change on every call to /random
  "id": 62,
  "quote": "If you want to lift yourself up, lift up someone else.",
  "author": "Booker T. Washington"
}
*/

console.log(border);

// TODO: Beef 태그 요리법(recipes) 조회
async function Beefrecipes() {
  const response = await axios.get('https://dummyjson.com/recipes/tag/beef')
  const data = response["data"]
  console.log(data)
}
Beefrecipes()
/* 출력 결과
{
  recipes: [
    {
      id: 8,
      name: 'Beef and Broccoli Stir-Fry',
      ingredients: [Array],
      instructions: [Array],
      prepTimeMinutes: 20,
      cookTimeMinutes: 15,
      servings: 4,
      difficulty: 'Medium',
      cuisine: 'Asian',
      caloriesPerServing: 380,
      tags: [Array],
      userId: 18,
      image: 'https://cdn.dummyjson.com/recipe-images/8.webp',
      rating: 4.7,
      reviewCount: 58,
      mealType: [Array]
    },
    {
      id: 14,
      name: 'Chapli Kebabs',
      ingredients: [Array],
      instructions: [Array],
      prepTimeMinutes: 30,
      cookTimeMinutes: 20,
      servings: 4,
      difficulty: 'Medium',
      cuisine: 'Pakistani',
      caloriesPerServing: 320,
      tags: [Array],
      userId: 152,
      image: 'https://cdn.dummyjson.com/recipe-images/14.webp',
      rating: 4.7,
      reviewCount: 98,
      mealType: [Array]
    }
  ],
  total: 2,
  skip: 0,
  limit: 2
}
*/
console.log(border);

// TODO: 가격(price) 내림차순(desc) 상품 목록 조회
async function SortProduct() {
  const response = await axios.get('https://dummyjson.com/products?sortBy=price&products=desc')
  const data = response["data"]
  console.log(data)
}
SortProduct();

/* 출력 결과
{
  products: [
    {
      id: 170,
      title: 'Durango SXT RWD',
      description: 'The Durango SXT RWD is a spacious and versatile SUV, known for its strong performance and family-friendly features.',
      category: 'vehicle',
      price: 36999.99,
      discountPercentage: 16.44,
      rating: 4.07,
      stock: 95,
      tags: [Array],
      brand: 'Dodge',
      sku: 'VEH-DOD-DUR-170',
      weight: 1,
      dimensions: [Object],
      warrantyInformation: '2 year warranty',
      shippingInformation: 'Ships in 1 month',
      availabilityStatus: 'In Stock',
      reviews: [Array],
      returnPolicy: '30 days return policy',
      minimumOrderQuantity: 1,
      meta: [Object],
      images: [Array],
      thumbnail: '<https://cdn.dummyjson.com/product-images/vehicle/durango-sxt-rwd/thumbnail.webp>'
    },
    {
      id: 168,
      title: 'Charger SXT RWD',
      description: 'The Charger SXT RWD is a powerful and sporty rear-wheel-drive sedan, offering a blend of performance and practicality.',
      category: 'vehicle',
      price: 32999.99,
      discountPercentage: 8.23,
      rating: 2.58,
      stock: 57,
      tags: [Array],
      brand: 'Dodge',
      sku: 'VEH-DOD-CHA-168',
      weight: 6,
      dimensions: [Object],
      warrantyInformation: '1 month warranty',
      shippingInformation: 'Ships in 3-5 business days',
      availabilityStatus: 'In Stock',
      reviews: [Array],
      returnPolicy: 'No return policy',
      minimumOrderQuantity: 1,
      meta: [Object],
      images: [Array],
      thumbnail: '<https://cdn.dummyjson.com/product-images/vehicle/charger-sxt-rwd/thumbnail.webp>'
    },
    ...
  ],
  total: 194,
  skip: 0,
  limit: 30
}
*/
console.log(border);

// TODO: id가 6인 유저의 장바구니(cart) 조회
async function UserCart() {
  const response = await axios.get('https://dummyjson.com/carts/user/6')
  const data = response["data"]
  console.log(data)
}
UserCart()
/* 출력 결과
{
  carts: [
    {
      id: 24,
      products: [Array],
      total: 1749.9,
      discountedTotal: 1594.33,
      userId: 6,
      totalProducts: 3,
      totalQuantity: 10
    }
  ],
  total: 1,
  skip: 0,
  limit: 1
}
*/
console.log(border);

