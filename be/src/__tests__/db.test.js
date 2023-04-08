const db = require('../db/db');

const URL= process.env.MONGO_DB_HOST ||"mongodb+srv://yasindlklc:1JlzZM2HB01YzIyT@cluster0.wknqv.mongodb.net/?retryWrites=true&w=majority"
describe('Database connection', () => {
  it('should connect to MongoDB', async () => {
   const result= await db.mongooseConnection.connectMongoose(URL);
    expect(result.connection.readyState).toBe(1);
  });

  it('should throw an error when cannot connect to DB', async () => {
   await expect(db.mongooseConnection.connectMongoose('mock_url')).rejects.toThrow('Cannot Connect to DB !');
  });
});
