import mongoose from "mongoose";
const Schema = mongoose.Schema;

const bikeSchema = new Schema({
    serialNumber: {
      type: String,
      required: true,
      unique: true
    },
    model: String,
    status: {
      type: String,
      enum: ['available', 'in-use', 'maintenance'],
      default: 'available'
    },
    station: {
      type: Schema.Types.ObjectId,
      ref: 'Station'
    }
  });
  
export default mongoose.model('Bike', bikeSchema);
  