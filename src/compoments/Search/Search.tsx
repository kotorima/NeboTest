import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


function Search() {
	const [value, setValue] = useState('');
	const [searchTerms, setSearchTerms] = useState([]);
	const [pulledUrls, setPulledUrls] = useState([]);
	const [apiData, setApiData] = useState({});
	const [currentSearchMatches, setCurrentSearchMatches] = useState([]);
	const [selectedPerson, setSelectedPerson] = useState('');

	const apiUrl = `https://swapi.co/api/people/?search=${value}`;

	const fetchRequest = fetch(apiUrl, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	}).then(resp => {
		console.log(resp.json);
		return setApiData(resp.json);
	});
	
	const handleChange = (val:any) => {
		setValue(val);
	}

	return (
		<div>
			<p>Search</p>
			<Autocomplete
				freeSolo
				id="free-solo-2-demo"
				disableClearable
				value={value}
				options={testData.map((option:any) => option.name)}
				// options={apiData.map((option:any) => option.name)}
				renderInput={(params) => (
				<TextField
					{...params}
					label="Search"
					InputProps={{
					...params.InputProps,
					type: 'search',
					}}
				/>
				)}
				onChange={(val) => handleChange(val)}
			/>
	  </div>
	)
}

const testData = [
	{
		"name": "C-3PO",
		"height": "167",
		"mass": "75",
		"hair_color": "n/a",
		"skin_color": "gold",
		"eye_color": "yellow",
		"birth_year": "112BBY",
		"gender": "n/a",
		"homeworld": "https://swapi.dev/api/planets/1/",
		"films": [
			"https://swapi.dev/api/films/1/",
			"https://swapi.dev/api/films/2/",
			"https://swapi.dev/api/films/3/",
			"https://swapi.dev/api/films/4/",
			"https://swapi.dev/api/films/5/",
			"https://swapi.dev/api/films/6/"
		],
		"species": [
			"https://swapi.dev/api/species/2/"
		],
		"vehicles": [],
		"starships": [],
		"created": "2014-12-10T15:10:51.357000Z",
		"edited": "2014-12-20T21:17:50.309000Z",
		"url": "https://swapi.dev/api/people/2/"
	}
]

export default Search;
