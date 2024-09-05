import Image from "next/image";
import { Fragment } from "react";
import Sidebar from "./components/Sidbar/sidbar";
import CardInfor from "./components/Cardinfor/cardinfor";

export default function Home() {
  return (
    <Fragment>
      <div>
      <Sidebar />
      <div>
      <CardInfor  valor={150} texto="teste123"/>
      </div>
      </div>
      
    </Fragment>
  );
}
