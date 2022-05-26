export const getTestData = (req, res) => {
  console.log('path:: /test-data ');
  res.status(200).send({testData: 'test data'});
}
