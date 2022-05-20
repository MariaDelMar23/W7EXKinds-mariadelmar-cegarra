const mockKinds = require("../../mocks/kindsList");
const { listKinds, getKind } = require("./kindsControllers");

jest.mock("../../database/models/Kind", () => ({
  ...jest.requireActual("../../database/models/Kind"),
  find: jest.fn().mockResolvedValue(mockKinds),
  findById: jest.fn().mockResolvedValue(mockKinds.kinds[2]),
}));

const res = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};

describe("Given the listKinds controller", () => {
  describe("When it receives a response", () => {
    test("Then it should call res' status and json methods with 200 and a list of kinds respectively", async () => {
      const expectedStatusCode = 200;
      const expectedBody = {
        kinds: mockKinds,
      };

      await listKinds(null, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
      expect(res.json).toHaveBeenCalledWith(expectedBody);
    });
  });
});

describe("Given the getKind constroller", () => {
  describe("When it receives a request with the id 3 and a response", () => {
    test("Then it should call res' status and json methods with 200 and {id: 3, kind: 'Malaje'} respectively", async () => {
      const req = {
        params: {
          id: 3,
        },
      };
      const expectedStatusCode = 200;
      const expectedBody = {
        kind: {
          id: 3,
          kind: "Malaje",
        },
      };

      await getKind(req, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
      expect(res.json).toHaveBeenCalledWith(expectedBody);
    });
  });
});

// describe("Given the createKind controller", () => {
//   describe("When it receives a request with a kind at body and a response", () => {
//     test("Then it should call res' status and json methods with ", () => {
//       const req = {
//         body: {
//           kind: "Dormilón",
//         },
//       };
//     });
//   });
// });
