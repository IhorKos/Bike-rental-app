import { bikesData } from './bikesData';

export default {
    loadAll: () => Promise.resolve(bikesData)
  };

  
//   module.exports = {
//     async loadBikes( … ) { … },
//     async addBike( … ) { … },
//     async removeBike( … ) { … },
//     async updateBike( … ) { … }
//   }