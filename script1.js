 // Step 1
const library = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      status: {
        own: true,
        reading: false,
        read: false
      }
    },
    {
      title: "1984",
      author: "George Orwell",
      status: {
        own: true,
        reading: false,
        read: false
      }
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      status: {
        own: true,
        reading: false,
        read: false
      }
    }
  ];
  
  // Step 2
  library.forEach(book => {
    book.status.read = true;
  });
  
  // Step 3
  const [{ title: firstBook }] = library;
  console.log(firstBook); // Output: To Kill a Mockingbird
  
  // Step 4
  const jsonString = JSON.stringify(library);
  console.log(jsonString);
