const API_KEY = process.env.REACT_APP_API_KEY

const House = {
    search(location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://clerkapi.azure-api.net/Members/v1/?$filter=congresses/stateCode eq ${location}&$orderby=${sortBy} asc&key=${API_KEY}`, {
            //   headers: {
            //     Authorization: `Bearer ${apiKey}`
            //   }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.members) {
                console.log('Got It');
                return jsonResponse.members.map(m => ({
                    id: m._id,
                    imageSrc: '',
                    prefix: m.honorificPrefix,
                    name: m.officialName,
                    state: m.congresses[0].stateCode,
                    district: m.congresses[0].stateDistrict,
                    hometown: m.addresses[0].addressLocality
                }));
            }
        });
    }
};

export default House;