import getData from '../utils/getData';
import logo from '../img/logo.png';

const Home = async () => {
    let page = 1;
    let searchText = '';
    let initialCharacters = [];

    // Function to load initial character data
    const loadInitialCharacters = async () => {
        try {
            initialCharacters = await getData();
            return initialCharacters;
        } catch (error) {
            console.error('Error loading initial characters:', error);
        }
        return [];
    };

    // Function to apply filters based on user input
    const data = await loadInitialCharacters();
    let characters = data?.results || [];
    let filteredCharacters = characters;
    let info = data?.info || {};

    const applyFilters = () => {
        const statusFilterElement = document.getElementById('status-filter');
        const speciesFilterElement = document.getElementById('species-filter');
      
        const statusFilter = statusFilterElement ? statusFilterElement.value : 'all';
        const speciesFilter = speciesFilterElement ? speciesFilterElement.value : 'all';
      
        const searchInput = document.getElementById('searchInput');
        const searchText = searchInput ? searchInput.value.trim() : '';

        let filteredCharacters = characters; // Restore full list
      
        // Apply status filter
        if (statusFilter !== 'all' && searchText === '') {
            filteredCharacters = filteredCharacters.filter(
                character => character.status.toLowerCase() === statusFilter.toLowerCase()
            );
        }
      
        // Apply species filter
        if (speciesFilter !== 'all'  && searchText === '') {
            filteredCharacters = filteredCharacters.filter(
                character => character.species.toLowerCase() === speciesFilter.toLowerCase()
            );
        }
      
        // Apply search filter
        if (searchText !== '') {
            filteredCharacters = filteredCharacters.filter(character =>
                character.name.toLowerCase().includes(searchText.toLowerCase())
            );
        }
      
        localStorage.setItem('searchText', '');
        renderCharacters(filteredCharacters, searchText);
    };

    // Function to render characters on the page
    const renderCharacters = (characters, searchText) => {
        const charactersContainer = document.getElementById('characters-container');
        const resultsHeader = document.getElementById('results-header');
        const resetSearchBtn = document.getElementById('reset-search');

        if(charactersContainer){
            charactersContainer.innerHTML = characters.map(character => `
                <div class="col">
                    <div class="card h-100 p-0 m-0">
                        <img src="${character.image}" class="card-img-top" alt="${character.name}">
                        <div class="card-body">
                            <h3 class="card-title">${character.name}</h3>
                        </div>
                        <div class="card-body">
                            <a href="#/${character.id}/" class="btn btn-primary">See more</a>
                        </div>
                    </div>
                </div>
            `).join('');
            const loadMoreButton = document.getElementById('next-page');
            if (loadMoreButton) {
                // Hide or show button based on search text
                if (searchText) {
                    loadMoreButton.style.display = 'none'; // Ocultar el botón si hay texto de búsqueda
                } else {
                    loadMoreButton.style.display = 'block'; // Mostrar el botón si no hay texto de búsqueda
                }
            } else {
                console.error('Load more button not found.');
            }

        } else {
            console.error('Character list element not found.');
        }
        if (resultsHeader) {
            if (searchText) {
                resultsHeader.textContent = `Resultados para "${searchText}":`;
            } else {
                resultsHeader.textContent = '';
            }
        } else {
            console.error('Results header element not found.');
        }
        if (resetSearchBtn) {
            resetSearchBtn.style.display = searchText ? 'block' : 'none'; // Mostrar u ocultar el botón según el texto de búsqueda
        } else {
            console.error('Reset search button not found.');
        }
    };

    // Function to reset the search input and filters
    const resetSearch = () => {
        searchText = '';
        document.getElementById('searchInput').value = '';
        applyFilters();
    };

    // Function to load more characters when the user clicks "Load More"
    const loadMoreCharacters = async (direction) => {
        try {
            if (direction === 'next' && info.next) {
                page++;
                const charactersData = await getData(null, page);
                characters = [...characters, ...charactersData.results];
                info = charactersData.info;
                filteredCharacters = characters;
                applyFilters();
            }
        } catch (error) {
            console.error('Error loading more characters:', error);
        }
    };
    
    const view = `
    <div class="container-fluid">
        <div class="card p-0 m-0 mt-1 mb-3">
            <img src="${logo}" class="img-fluid" alt="...">
        </div>
        <div class="d-flex justify-content-start justify-content-lg-end mb-3">
            <div class="d-flex align-items-baseline align-items-lg-center me-3 flex-column flex-md-row">
                <label for="status-filter" class="form-label mb-0 me-2">Status:</label>
                <select id="status-filter" class="form-select" style="width: 120px;">
                    <option value="all">All</option>
                    <option value="alive">Alive</option>
                    <option value="dead">Dead</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>
            <div class="d-flex align-items-baseline align-items-lg-center me-3 flex-column flex-md-row">
                <label for="species-filter" class="form-label mb-0 me-2">Species:</label>
                <select id="species-filter" class="form-select" style="width: 120px;">
                    <option value="all">All</option>
                    <option value="human">Human</option>
                    <option value="alien">Alien</option>
                </select>
            </div>
        </div>
        <div id="results-header" class="mb-3"></div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 text-center" id="characters-container">
            ${filteredCharacters.map(character => `
            <div class="col">
                <div class="card h-100 p-0 m-0">
                    <img src="${character.image}" class="card-img-top" alt="${character.name}">
                    <div class="card-body">
                        <h3 class="card-title">${character.name}</h3>
                    </div>
                    <div class="card-body">
                        <a href="#/${character.id}/" class="btn btn-primary">See more</a>
                    </div>
                </div>
            </div>
            `).join('')}
        </div>
        <nav aria-label="Page navigation example" class="mt-3">
            <ul class="pagination justify-content-center">
         
                <li class="page-item" id="next-page"><a class="page-link" href="#">Load More Characters</a></li>
            </ul>
            
        </nav>
        <div class="d-flex justify-content-center mb-3">
            <button id="reset-search" class="btn btn-secondary mt-3" style="display: none;">Reset Search</button>
        </div>
        <button id="scrollToTop" class="btn btn-primary rounded-circle position-fixed bottom-0 end-0 mb-3 me-3" aria-label="Scroll to Top">
            ↑
        </button>
    </div>
    `;

    // Set up event listeners after rendering
    setTimeout(() => {
        document.getElementById('status-filter').addEventListener('change', applyFilters);
        document.getElementById('species-filter').addEventListener('change', applyFilters);
        document.getElementById('next-page').addEventListener('click', (e) => {
            e.preventDefault();
            loadMoreCharacters('next');
        });
        const resetSearchBtn = document.getElementById('reset-search');
        resetSearchBtn.addEventListener('click', resetSearch);
        const scrollToTopBtn = document.getElementById('scrollToTop');
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }, 0);
    // Listen for custom search events
    window.addEventListener('searchPerformed', (event) => {
        searchText = event.detail.searchText;
        applyFilters();
    });

    return view;
};

export default Home;
