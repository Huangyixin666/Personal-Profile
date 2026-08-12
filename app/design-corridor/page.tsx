"use client";

import { useRouter } from "next/navigation";
import { DesignCorridor } from "../../personal information/src/features/design-corridor";

export default function DesignCorridorPage(){
  const router=useRouter();
  return <DesignCorridor open onClose={()=>router.push("/Personal-Profile/")}/>;
}
