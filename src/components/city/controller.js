const { add, listOne } = require('./store');

const validateCity = async (nameCity) => {

    const city = await listOne(nameCity);
    var cityId = null;

    if (city) {
        cityId = city.cityId;
    } else {
        const createdCity = await add(nameCity);
        cityId = createdCity.cityId;
    }

    return cityId;
}

module.exports = {
    validateCity
}