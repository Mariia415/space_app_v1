export const gettingData = (arr, exactData) => {
    if (Array.isArray(arr)) {
      return arr.map((item, idx) => ({info: item[exactData], id: idx}));
    }
  };