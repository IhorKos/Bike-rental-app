import { bikesData } from './bikesData';

const clone = value => JSON.parse(JSON.stringify(value));

const remove = (array, value) => {
  const idx = array.indexOf(value);
  if (idx !== -1)
    return array.splice(idx, 1);
  return false;
};

export const loadBicycles = () => {
  return Promise.resolve(clone(bikesData));
};

/**
 * @param {number} id
 * @param {object} patch
 * @param {string} [patch.bike_name]
 * @param {string} [patch.bike_type]
 * @param {number} [patch.rent_price]
 * @param {boolean} [patch.rent]
 */
export const updateBicycle = (id, patch) => {
  const bicycle = bikesData.find(b => b.id === id);
  if (!bicycle)
    Promise.reject();

  return new Promise(resolve => {
    setTimeout(() => {
      Object.assign(bicycle, patch);
      resolve();
    }, 400);
  });
};

/**
 * @param {number} id
 */
export const deleteBicycle = (id) => {
  const bicycle = bikesData.find(b => b.id === id);
  if (!bicycle)
    Promise.reject();

  return new Promise(resolve => {
    setTimeout(() => {
      remove(bikesData, bicycle);
      resolve();
    }, 400);
  });
};


  
//   module.exports = {
//     async addBike( … ) { … },
//     async removeBike( … ) { … },
//   }