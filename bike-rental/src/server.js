import bicyclesList from './bicycles';

const clone = value => JSON.parse(JSON.stringify(value));

const remove = (array, value) => {
  const idx = array.indexOf(value);
  if (idx !== -1)
    return array.splice(idx, 1);
  return false;
};

export const addBicycle = newBicycle => new Promise(resolve => {
  setTimeout(()=> {
    bicyclesList.push(newBicycle);
    resolve();
  }, 300);
});

export const loadBicycles = () => new Promise(resolve => {
  setTimeout(() => {
    resolve(clone(bicyclesList));
  }, 300);
});

/**
 * @param {number} id
 * @param {object} patch
 * @param {string} [patch.bike_name]
 * @param {string} [patch.bike_type]
 * @param {number} [patch.rent_price]
 * @param {boolean} [patch.rent]
 */
export const updateBicycle = (id, patch) => new Promise((resolve, reject) => {
  const bicycle = bicyclesList.find(b => b.id === id);

  if (!bicycle)
    return reject();

  setTimeout(() => {
    Object.assign(bicycle, patch);
    resolve();
  }, 400);
});

/**
 * @param {number} id
 */
export const deleteBicycle = (id) => new Promise((resolve, reject) => {
  const bicycle = bicyclesList.find(b => b.id === id);

  if (!bicycle)
    return reject();

  setTimeout(() => {
    remove(bicyclesList, bicycle);
    resolve();
  }, 400);
});