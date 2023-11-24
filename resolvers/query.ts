import { GraphQLError } from "graphql";
import { PetModel } from "../db/Schema.ts";
export const Query = {
        pets: async (_: unknown, args: { breed?: string }) => {
            const { breed } = args;
            if (breed) return await PetModel.find(breed ? { breed } : {}).exec();
            return await PetModel.find({}).exec();
        },
        pet: async (_: unknown, args: { id: string }) => {
            const { id } = args;
            const pet = await PetModel.findById(id).exec();
            if (!pet) {
                throw new GraphQLError(`No pet found with id ${args.id}`, {
                    extensions: { code: "NOT_FOUND" },
                });
            }
            return pet;
        },
}