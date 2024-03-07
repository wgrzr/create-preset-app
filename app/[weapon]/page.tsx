import {
  Builder,
} from "../../components";

export default async function Page({
  params,
}: {
  params: { weapon: string };
}) {
  return (
    <div className="w-full h-full">
      <Builder activeWeapon={params.weapon} />
    </div>
  );
}
