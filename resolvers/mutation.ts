import { GraphQLError } from "graphql";
import {PetModel} from "../db/Schema.ts";
export const Mutation = {
    addPet: async (_: unknown, args: {name: string; breed: string }) => {
        const pet = new PetModel({
            name: args.name,
            breed: args.breed,
        })
        await pet.save();
        return pet;
    },
        deletePet: async (_: unknown, args: { id: string }) => {
        const { id } = args;
        const pet = await PetModel.findByIdAndDelete(id).exec();
        if (!pet) {
            throw new GraphQLError(`No pet found with id ${args.id}`, {
                extensions: { code: "NOT_FOUND" },
            });
        }
        return pet;
    },
        updatePet: async (_: unknown, args: { id: string; name: string; breed: string }) => {
        const {id, name, breed } = args;

        const pet = await PetModel.findByIdAndUpdate(
            id,
            { name, breed },
            { new: true, runValidators: true }
        )
        return pet;
    },
}