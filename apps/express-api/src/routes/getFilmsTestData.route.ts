import {serverResponse} from "@monorepo-nx/data-constants";

export const getFilmsTestData = (req, res) => {
  console.log('path:: /films-test-data ');
  res.status(200).send(serverResponse);
}
