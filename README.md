# Documentación API GraphQL

Esta API permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre un conjunto de datos que representan mascotas. Se conecta a través de Apollo Server.

## Punto de Acceso

La API está accesible a través de la URL: `https://ejercicio24nov.deno.dev/`

## Esquema GraphQL

El esquema GraphQL define los tipos de datos y las operaciones permitidas. Aquí se muestra el esquema que se utiliza en esta API:

```graphql
type Pet {
    id: ID!
    name: String!
    breed: String!
}

type Query {
    pets(breed: String): [Pet!]!
    pet(id: ID!): Pet!
}

type Mutation {
    addPet(name: String!, breed: String!): Pet!
    deletePet(id: ID!): Pet!
    updatePet(id: ID!, name: String!, breed: String!): Pet!
}
```

## Consultas (Queries)

### Obtener Mascotas (pets)

Para obtener todas las mascotas o filtrar por raza:

```graphql
query Query($breed: String) {
    pets(breed: $breed) {
        breed
        id
        name
    }
}
```

### Obtener Mascota por ID (pet)

Para obtener una mascota específica por su ID:

```graphql
query Pet($petId: ID!) {
    pet(id: $petId) {
        breed
        name
        id
    }
}
```

## Mutaciones (Mutations)

### Agregar Mascota (addPet)

Para agregar una nueva mascota:

```graphql
mutation AddPet($name: String!, $breed: String!) {
    addPet(name: $name, breed: $breed) {
        breed
        id
        name
    }
}
```

### Eliminar Mascota (deletePet)

Para eliminar una mascota por su ID:

```graphql
mutation DeletePet($deletePetId: ID!) {
    deletePet(id: $deletePetId) {
        breed
        id
        name
    }
}
```

### Actualizar Mascota (updatePet)

Para actualizar la información de una mascota:

```graphql
mutation UpdatePet($updatePetId: ID!, $name: String!, $breed: String!) {
    updatePet(id: $updatePetId, name: $name, breed: $breed) {
        id
        breed
        name
    }
}
```