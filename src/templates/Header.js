const Header = () => {
    const view = `
      <div class="header container-fluid mt-1 rounded">
        <nav class="navbar navbar-expand-lg" style="background-color: rgba(0, 0, 0, 0.1); border-radius: 5px;">
          <div class="container-fluid">
            <h1><a class="navbar-brand" href="/">100tifi.co</a></h1>
            <form id="searchForm" class="d-flex" role="search">
              <input id="searchInput" class="form-control me-2" type="search" placeholder="Name.." aria-label="Search">
              <button class="btn btn-outline-primary" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </div>
    `;
  
    // Set up the search form event listener after rendering
    setTimeout(() => {
      const searchForm = document.getElementById('searchForm');
      if (searchForm) {
        searchForm.addEventListener('submit', (event) => {
          event.preventDefault(); // Prevent form submission
          const searchInput = document.getElementById('searchInput');
          if (searchInput && searchInput.value) {
            const searchText = searchInput.value;
            // Create and dispatch a custom event with the search text
            const searchEvent = new CustomEvent('searchPerformed', {
              detail: {
                searchText: searchText
              }
            });
            window.dispatchEvent(searchEvent);
          } else {
            console.error('Search input is not available.');
          }
        });
      }
    }, 0);
  
    return view;
  };
  
  export default Header;
  