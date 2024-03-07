import { useSingleWeaponQuery } from "../gql-generated-types";
import { serverFetch } from "./query-utils";

export async function getWeaponData(name: string) {
  const { item } = await serverFetch(useSingleWeaponQuery, {
    variables: { normalizedName: name },
    next: { revalidate: 0 },
  });

  return item
}