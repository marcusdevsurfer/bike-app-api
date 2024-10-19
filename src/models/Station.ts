import mongoose from "mongoose";
const Schema = mongoose.Schema;

const stationSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    location: {
        type: String, // "Point"
        required: true
    }
  });
  
export default mongoose.model('Station', stationSchema);
  