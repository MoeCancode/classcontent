const axios = require("axios");
const MovieSearch = require("../movieSearch");

//https://jestjs.io/docs/es6-class-mocks#replacing-the-mock-using-mockimplementation-or-mockimplementationonce
jest.mock("axios");

describe("MovieSearch", () => {
  describe("buildUrl", () => {
    it("should return an OMDB movie search URL using a movie name", () => {
      const movie = new MovieSearch();
      const name = "Rocky";

      const url = movie.buildUrl(name);

      expect(url).toEqual(`https://www.omdbapi.com/?t=${name}&apikey=trilogy`);
    });
  });

  describe("search", () => {
    it("should search the OMDB API for a given movie", () => {
      const movie = new MovieSearch();
      const name = "Rocky";

      // https://jestjs.io/docs/mock-function-api#mockfnmockreturnvaluevalue
      axios.get.mockReturnValue(
        new Promise(function(resolve) {
          resolve({ data: {} });
        })
      );

      expect(movie.search(name)).resolves.toEqual({ data: {} });
      //https://jestjs.io/docs/expect#tohavebeenlastcalledwitharg1-arg2-
      expect(axios.get).lastCalledWith(movie.buildUrl(name));
      //https://jestjs.io/docs/expect#tohavebeencalledwitharg1-arg2-
      expect(axios.get).toBeCalledWith(movie.buildUrl(name));
    });
  });
});
