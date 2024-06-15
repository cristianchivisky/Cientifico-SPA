
const Header = () => {
    
    const view = `
        <div class="header container-fluid mt-1 rounded">
            <nav class="navbar navbar-expand-lg"  style="background-color: rgba(0, 0, 0, 0.1); border-radius: 5px;">
                <div class="container-fluid">
                    <h1 style="font-weight: bold;"><a class="navbar-brand" href="/">100tifi.co</a></h1>
                    <form id="searchForm" class="d-flex" role="search">
                        <input id="searchInput" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                </div>
                </nav>
        </div>

    `;
    setTimeout(() => {
        const searchForm = document.getElementById('searchForm');
        searchForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const searchText = document.getElementById('searchInput').value;
            localStorage.setItem('searchText', searchText);
            window.location.href = '/';
        });
    }, 0);
    return view;
};

export default Header;