import mongoose from "mongoose";
const Schema = mongoose.Schema;

const rentalSchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    bike: {
      type: Schema.Types.ObjectId,
      ref: 'Bike',
      required: true
    },
    rentalStartTime: {
      type: Date,
      default: Date.now
    },
    rentalEndTime: Date,
    stationStart: {
      type: Schema.Types.ObjectId,
      ref: 'Station',
      required: true
    },
    stationEnd: {
      type: Schema.Types.ObjectId,
      ref: 'Station'
    }
  });
  
export default mongoose.model('Rental', rentalSchema);
  