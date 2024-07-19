// Function to get the current hash from the URL
const getHash = () => 
    // Remove the '#' from the hash, convert to lowercase, split by '/', and get the second element
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';


 export default getHash;