import mongoose from 'mongoose';

const petSchema = new mongoose.Schema({
    name: {type: String, required: true},
    breed: {type: String, required: true},
}, {timestamps: true});

export type PetDocument = mongoose.Document
export const PetModel = mongoose.model<PetDocument>('Pet', petSchema);