import { UserManager } from "../../src/server/managers/user.manager";

test("expect there to be 7 users in the response", async () => {
  const data = await UserManager.getAllUsernames();
  expect(data).toHaveLength(7);
});
