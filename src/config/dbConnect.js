import mongoose, {connect, mongo} from "mongoose";

async,function connectNaDatabase(){

    mongoose.connect("mongodb+srv://kaiquetik61:<24235643>@cluster0.0mrlqoz.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0");

     return mongose.connection;
};

export default connectNaDatabase;



