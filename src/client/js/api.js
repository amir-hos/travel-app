
// get the Coordinates by place

export const getCoordinatesAPI = async (city, country = '') => {

    const callUrl = ` http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=amer`;
    const res = await fetch('https://cors-anywhere.herokuapp.com/'+ callUrl);
    //const res = await fetch(callUrl);
    try {
        const data = await res.json();
        
        if(data.totalResultsCount == 0) {
            return { error: "The "+ city +" can't be found" };
        }
        return data;

    } catch(err){
        console.log(err);
    }
    
}

export const weatherBitApiUrl = (day, lat, lon) => {
    const baseUrl = 'http://api.weatherbit.io/v2.0/forecast/daily';
    const urlParts = '4480896a43cb41d48cf07cd214af12d7';
    const dayPart = '&days=';
    const latPart = '&lat=';
    const lonPart = '&lon=';

    return baseUrl + urlParts + dayPart + day + latPart + lat + lonPart + lon;
};

export const getImageAPI = async (keyword) => {

    //replace the spaces with + sign;
    keyword = keyword.replace(/\s/g, '+');

    const PIXABAY_API_KEY='13611206-a32b6e6a142f896d9beadab9c';
    const callUrl = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${keyword}&image_type=photo&pretty=true`;
    const res = await fetch(callUrl);

    try {

        const data = await res.json();
        return data;

    } catch(err){
        console.log(err);
    }
    
}