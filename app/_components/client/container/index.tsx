"use client";

import { useWeaponItemsQuery } from "@/gql-generated-types";
import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  const { data, isLoading } = useWeaponItemsQuery({ name: "" });

  return <div>Container</div>;
};

export default Container;
