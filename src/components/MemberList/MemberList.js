import React, {useEffect, useState } from 'react';
import Member from "../Member/Member";

const API_KEY = process.env.REACT_APP_API_KEY 

async function getMembers(location, sortBy) {
const response = await fetch(`https://clerkapi.azure-api.net/Members/v1/?$filter=congresses/stateCode eq 'NC'&$orderby=familyName asc&key=${API_KEY}`
    );
    return response.json();
}

export default function MemberList() {
const [data, setData] = useState([]);
useEffect(()=> {
getMembers().then(memberData => setData(memberData.results));
}, []);
return (
<div>
{data.map(m => 
    <Member 
        key={m._id}
        prefix={m.honorificPrefix}
        name={m.officialName}
        location={m.congresses[0].stateCode}
        district={m.congresses[0].stateDistrict}
        hometown={m.addresses[0].addressLocality}
        />)
}
</div>
);
}