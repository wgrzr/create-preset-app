import { useWeaponItemsQuery } from "@/gql-generated-types";
import { serverFetch } from "@/utils/query-utils";
import { unstable_noStore } from "next/cache";

import Link from "next/link";

export default async function Page() {
  unstable_noStore();

  const { items } = await serverFetch(useWeaponItemsQuery, {
    next: { revalidate: 5 },
  });

  return (
    <main>
      <ul>
        {items
          ? items.map((item) => (
              <li key={item?.id}>
                <Link href={`/${item?.normalizedName}`}>{item?.name}</Link>
              </li>
            ))
          : null}
      </ul>
    </main>
  );
}
