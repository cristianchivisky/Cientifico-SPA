import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character =  async () => {
    const id = getHash(); // Get the current character ID from the URL hash
    const character = await getData(id, null); // Fetch character data using the ID
    // Create a template for the character details view
    const view = `
        <div class="container-fluid mt-2" style="min-height: 80vh;">
            <div class="row">
                <div class="col-md-6 mb-2">
                    <div class="card">
                        <img src="${character.image}" class="card-img-top" alt="${character.name}" style="max-width: 100%; max-height: 440px; object-fit: cover;">
                        <div class="card-body">
                            <h5 class="card-title">${character.name}</h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Character Details</h5>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Episodes: <span>${character.episode.length}</span></li>
                                <li class="list-group-item">Status: <span>${character.status}</span></li>
                                <li class="list-group-item">Species: <span>${character.species}</span></li>
                                <li class="list-group-item">Gender: <span>${character.gender}</span></li>
                                <li class="list-group-item">Origin: <span>${character.origin.name}</span></li>
                                <li class="list-group-item">Last Location: <span>${character.location.name}</span></li>
                            </ul>
                            <button class="btn btn-secondary mt-3" onclick="history.back()">Back</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
    return view
};
export default Character;