import mongoose from "mongoose";
const Schema = mongoose.Schema;

const maintenanceSchema = new Schema({
    bike: {
      type: Schema.Types.ObjectId,
      ref: 'Bike',
      required: true
    },
    maintenanceDate: {
      type: Date,
      default: Date.now
    },
    description: {
      type: String,
      required: true
    },
    performedBy: {
      type: String,
      required: true
    },
    cost: {
      type: Number,
      required: false
    }
  });
  
export default mongoose.model('Maintenance', maintenanceSchema);
  