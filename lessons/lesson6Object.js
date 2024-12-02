// Lesson #6 Object

// === Challenge 1: Create and Access Object Properties ===
// Task: Create an object `movie` with properties:
// - `title`: any movie name (string)
// - `year`: the release year (number)
// - `genre`: the genre of the movie (string)
// Access the `title` using dot notation and `year` using bracket notation.

const movie = {
    // TODO: Add the properties here
  };
  
  // TODO: Access and log the `title` using dot notation
  // TODO: Access and log the `year` using bracket notation
  
  // Example Output:
  // Title: Inception
  // Year: 2010
  
  
  // === Challenge 2: Loop Through an Object ===
  // Task: Write a function `displayObjectDetails(obj)` that takes any object and:
  // 1. Logs all keys and values using a `for...in` loop.
  // 2. Adds a line "This is a property!" after each key-value log.
  
  const sampleObject = {
    name: "Alice",
    age: 25,
    profession: "Developer",
  };
  
  // TODO: Write the function `displayObjectDetails` here
  
  // Example Output for sampleObject:
  // Key: name, Value: Alice
  // This is a property!
  // Key: age, Value: 25
  // This is a property!
  // Key: profession, Value: Developer
  // This is a property!
  
  
  // === Challenge 3: Modify an Object ===
  // Task: Create an object `phone` with properties:
  // - `brand`: a phone brand (string)
  // - `model`: a phone model (string)
  // - `price`: price of the phone (number)
  // Then:
  // 1. Add a new property `color`.
  // 2. Change the `price` to be 20% less than its original value.
  // 3. Delete the `model` property.
  // Finally, log the updated object.
  
  const phone = {
    // TODO: Add the initial properties here
  };
  
  // TODO: Add a new property `color`
  // TODO: Modify the `price` to be 20% less
  // TODO: Remove the `model` property
  
  // Example Output:
  // { brand: "Samsung", price: 800, color: "Black" }
  
  
  // === Challenge 4: Use Object.entries() ===
  // Task: Write a function `formatKeyValuePairs(obj)` that:
  // 1. Uses `Object.entries()` to get all key-value pairs.
  // 2. Returns an array where each pair is formatted as "Key: <key>, Value: <value>".
  
  const sampleData = {
    product: "Laptop",
    price: 1200,
    stock: 50,
  };
  
  // TODO: Write the function `formatKeyValuePairs`
  
  // Example Output for sampleData:
  // ["Key: product, Value: Laptop", "Key: price, Value: 1200", "Key: stock, Value: 50"]
  
  
  // === Challenge 5: Filter Object Properties ===
  // Task: Write a function `filterStringsOnly(obj)` that:
  // 1. Uses `Object.entries()` to filter out only string properties.
  // 2. Returns a new object containing only the string properties.
  
  const mixedDataLesson6 = {
    name: "Monitor",
    price: 299,
    brand: "Dell",
    inStock: true,
  };
  
  // TODO: Write the function `filterStringsOnly`
  
  // Example Output for mixedData:
  // { name: "Monitor", brand: "Dell" }
  