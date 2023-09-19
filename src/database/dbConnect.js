import mongoose from "mongoose";

mongoose.connect("mongodb+srv://admin:isnard3473@cluster0.riir0qh.mongodb.net/ehoje");
// A função connect guarda a string de conexão dentro dos parênses.

let db = mongoose.connection;
// Agora criamos uma variável que guarda a ação de conectar nosso usário como mogodb.
export default db;
