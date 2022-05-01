function fakeDataApi(page: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      import(`data/CONTENTLISTINGPAGE-PAGE${page}.json`)
        .then(module => {
          resolve(module.default);
        })
        .catch(err => {
          reject(err);
        });
    }, 1000);
  });
}

export default {
  getData: fakeDataApi,
};
