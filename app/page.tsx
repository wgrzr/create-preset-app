import { Item, useWeaponItemsQuery } from "@/gql-generated-types";
import { serverFetch } from "@/server/query-utils";

import Link from "next/link";

export default async function Page() {

  const { items } = await serverFetch(useWeaponItemsQuery, {
    next: { revalidate: 5 },
  });

  return (
    <main>
      <ul>
        {items
          ? items.map((item: Item) => (
            <li key={item?.id}>
              <Link href={`/${item?.normalizedName}`}>{item?.name}</Link>
            </li>
          ))
          : null}
      </ul>
    </main>
  );
}
