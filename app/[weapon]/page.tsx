import {
  useSingleWeaponQuery,
  useWeaponItemsQuery,
} from "@/gql-generated-types";
import { serverFetch } from "@/utils/query-utils";
import Image from "next/image";

export default async function WeaponPageServerComponent({
  params,
}: {
  params: { weapon: string };
}) {
  const { item } = await serverFetch(useSingleWeaponQuery, {
    variables: { normalizedName: params.weapon },
    next: { revalidate: 5 },
  });

  return (
    <div>
      <div className="data-container">
        <h1>{"params.weapon (URL): " + params.weapon}</h1>
        {item ? (
          <div className="content">
            <p className="desc">{item.description}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
