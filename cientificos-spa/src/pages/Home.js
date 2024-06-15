import getData from '../utils/getData';
import logo from '../img/logo.png';

const Home =  async () => {
    const characters = await getData();
    let searchText = localStorage.getItem('searchText') || '';

    let filteredCharacters = characters.results;

    if (searchText.trim() !== '') {
        filteredCharacters = characters.results.filter(character =>
            character.name.toLowerCase().includes(searchText.toLowerCase())
        );
    }

    // Limpiar el searchText después de filtrar
    localStorage.setItem('searchText', '');
    searchText = ''; // También limpiar la variable local searchText

    const view =  `
    <div class="container-fluid">
        <div class="card p-0 m-0 mt-1 mb-3">
            <img src="${logo}" class="img-fluid" alt="...">
        </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 text-center">
            ${filteredCharacters.map(character => `
            <div class="col">
                <div class="card h-100 p-0 m-0" >
                    <img src="${character.image}" class="card-img-top" alt="${character.name}">
                    <div class="card-body">
                        <h3 class="card-title">${character.name}</h3>
                    </div>
                    <div class="card-body">
                        <a href="#/${character.id}/" class="btn btn-primary">See more</a>
                    </div>
                </div>
            </div>
                    `).join('') }
        </div>
    </div>
            `;
    return view;
}

export default Home;