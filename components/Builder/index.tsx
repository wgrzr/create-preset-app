import { getWeaponData } from "@/server/getWeaponData"
import { BuilderHeader } from "./BuilderHeader"

export const DataWidget = async ({ weaponName }: { weaponName: string }) => {
  const { id, shortName, normalizedName, description } = await getWeaponData(weaponName)
  return (
    <div className="bg-gray-50 p-4 m-2 rounded-xl bottom-0 right-0 absolute text-[10px] w-80 ">
      <p className="mx-2"><b>id:</b> {id}</p>
      <p className="mx-2"><b>shortName:</b> {shortName}</p>
      <p className="mx-2"><b>normalizedName:</b> {normalizedName}</p>
      <p className="mx-2 font-bold uppercase">description:</p>
      <p className="mx-2 mb-4">
        {description}</p>
      <hr></hr>
    </div>
  )
}

export const Builder = ({ activeWeapon }: { activeWeapon: string }) => {

  return (
    <div className="">
      <BuilderHeader />
      <DataWidget weaponName={activeWeapon} />
    </div>
  )
}