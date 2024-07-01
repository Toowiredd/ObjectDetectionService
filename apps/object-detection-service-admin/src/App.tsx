import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AluminiumCanList } from "./aluminiumCan/AluminiumCanList";
import { AluminiumCanCreate } from "./aluminiumCan/AluminiumCanCreate";
import { AluminiumCanEdit } from "./aluminiumCan/AluminiumCanEdit";
import { AluminiumCanShow } from "./aluminiumCan/AluminiumCanShow";
import { Hdpe2PlasticBottleList } from "./hdpe2PlasticBottle/Hdpe2PlasticBottleList";
import { Hdpe2PlasticBottleCreate } from "./hdpe2PlasticBottle/Hdpe2PlasticBottleCreate";
import { Hdpe2PlasticBottleEdit } from "./hdpe2PlasticBottle/Hdpe2PlasticBottleEdit";
import { Hdpe2PlasticBottleShow } from "./hdpe2PlasticBottle/Hdpe2PlasticBottleShow";
import { GlassBottleList } from "./glassBottle/GlassBottleList";
import { GlassBottleCreate } from "./glassBottle/GlassBottleCreate";
import { GlassBottleEdit } from "./glassBottle/GlassBottleEdit";
import { GlassBottleShow } from "./glassBottle/GlassBottleShow";
import { MilkCartonList } from "./milkCarton/MilkCartonList";
import { MilkCartonCreate } from "./milkCarton/MilkCartonCreate";
import { MilkCartonEdit } from "./milkCarton/MilkCartonEdit";
import { MilkCartonShow } from "./milkCarton/MilkCartonShow";
import { Pet1PlasticBottleList } from "./pet1PlasticBottle/Pet1PlasticBottleList";
import { Pet1PlasticBottleCreate } from "./pet1PlasticBottle/Pet1PlasticBottleCreate";
import { Pet1PlasticBottleEdit } from "./pet1PlasticBottle/Pet1PlasticBottleEdit";
import { Pet1PlasticBottleShow } from "./pet1PlasticBottle/Pet1PlasticBottleShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ObjectDetectionService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="AluminiumCan"
          list={AluminiumCanList}
          edit={AluminiumCanEdit}
          create={AluminiumCanCreate}
          show={AluminiumCanShow}
        />
        <Resource
          name="Hdpe2PlasticBottle"
          list={Hdpe2PlasticBottleList}
          edit={Hdpe2PlasticBottleEdit}
          create={Hdpe2PlasticBottleCreate}
          show={Hdpe2PlasticBottleShow}
        />
        <Resource
          name="GlassBottle"
          list={GlassBottleList}
          edit={GlassBottleEdit}
          create={GlassBottleCreate}
          show={GlassBottleShow}
        />
        <Resource
          name="MilkCarton"
          list={MilkCartonList}
          edit={MilkCartonEdit}
          create={MilkCartonCreate}
          show={MilkCartonShow}
        />
        <Resource
          name="Pet1PlasticBottle"
          list={Pet1PlasticBottleList}
          edit={Pet1PlasticBottleEdit}
          create={Pet1PlasticBottleCreate}
          show={Pet1PlasticBottleShow}
        />
      </Admin>
    </div>
  );
};

export default App;
