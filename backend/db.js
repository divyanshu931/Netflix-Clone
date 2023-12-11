const mongoose = require("mongoose");

 exports.Database= function Database() {
    mongoose.set('strictQuery', false);
    mongoose
      .connect("mongodb+srv://divyanshutomar943:w0mviqp65OtHruaB@cluster0.t5gljlu.mongodb.net/Clone?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("DB Connetion Successfull");
      })
      .catch((err) => {
        console.log(err.message);
      });
}
 