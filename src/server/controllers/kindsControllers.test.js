const listKinds = require("./kindsControllers");
const Kind = require("../../database/models/Kind");

const kinds = {
  kind: "gatigos",
};

describe("Given the listKinds function", () => {
  describe("When its called with a response", () => {
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    test("Then it should call the res method status with 200", async () => {
      Kind.find = jest.fn().mockResolvedValue(kinds);

      const expectedResult = 200;

      await listKinds(null, res);

      expect(res.status).toHaveBeenCalledWith(expectedResult);
    });

    test("Then it should call the res method json with the kinds", async () => {
      const expectedResult = {
        msg: kinds,
      };

      await listKinds(null, res);

      expect(res.json).toHaveBeenCalledWith(expectedResult);
    });
  });
  describe("When its called with a wrong request", () => {
    test("Then it should call the next with err.code 409 and er.message 'bad request'", async () => {
      Kind.find = jest.fn().mockResolvedValue(!kinds);

      const next = jest.fn();

      const err = new Error();
      err.message = "bad request";

      await listKinds(null, null, next);

      expect(next).toHaveBeenCalledWith(err);
    });
  });
});
