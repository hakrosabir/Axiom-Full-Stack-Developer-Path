// Get DOM Elements
// Get Search form
const form = document.getElementById('form');
// Get the input text filed

const search = document.getElementById('search');

// Get the results container
const results = document.getElementById('results');

// Get pagination container
const pagination = document.getElementById('pagination');


// Base URL for API

const api = 'https://api.lyrics.ovh';


// Functions
//1. Function to search song title and artist

async function serachSongs(term)
{
    const res = await fetch(`${api}/suggest/${term}`);
}





// Event Listeners for search form

form.addEventListener('submit',e=>{
    // prevent reload page on submit
    e.preventDefault();
    // Get the search term from the input
    const searchTerm = search.value.trim();
    // just for checking log
    //console.log(searchTerm);

    // check if search term is valid 
    if(searchTerm){
       // serachSongs(searchTerm);
    }else
    {
        alert('Please enter a valid search!');
    }
})
