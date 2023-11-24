// Click handler for search button
const captureSearchValue = () => {
    const searchInput = document.querySelector("#search-bar");
      return searchInput.value.trim().toLowerCase();
    };
    
    // Filter books based on search input
    const filterBooks = (searchValue, books) => {
      // Convert the searchValue to lowercase
      searchValue = searchValue.toLowerCase();
    
      return books.filter((book) => {
        const flattenedValues = flattenObjectValuesIntoArray([book])[0].map((value) =>
          value.toLowerCase()
        );
    
        return flattenedValues.includes(searchValue);
      });
    };
    
    // Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js` 
    const structureBooksAsHtml = (filteredBooks) => {
      return filteredBooks.map((book) => structureBookAsHtml(book));
    };
    
    // Grab search button from the DOM
    const searchBtn = document.querySelector("#search-btn");
    
    // Handler triggered when a user clicks the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
    const searchBtnClickHandler = () => {
      const searchValue = captureSearchValue();
      const filteredBooks = filterBooks(searchValue, books); // Use 'books' from bookList.js
      const formattedBooks = structureBooksAsHtml(filteredBooks);
      renderBooksToDom(formattedBooks);
    };
    
    // Attach an event listener to the search button
    searchBtn.addEventListener("click", () => {
      searchBtnClickHandler();
    });