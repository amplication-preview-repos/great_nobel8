import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AnswerList } from "./answer/AnswerList";
import { AnswerCreate } from "./answer/AnswerCreate";
import { AnswerEdit } from "./answer/AnswerEdit";
import { AnswerShow } from "./answer/AnswerShow";
import { QuestionList } from "./question/QuestionList";
import { QuestionCreate } from "./question/QuestionCreate";
import { QuestionEdit } from "./question/QuestionEdit";
import { QuestionShow } from "./question/QuestionShow";
import { GameLevelList } from "./gameLevel/GameLevelList";
import { GameLevelCreate } from "./gameLevel/GameLevelCreate";
import { GameLevelEdit } from "./gameLevel/GameLevelEdit";
import { GameLevelShow } from "./gameLevel/GameLevelShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
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
        title={"IDEGameService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Answer"
          list={AnswerList}
          edit={AnswerEdit}
          create={AnswerCreate}
          show={AnswerShow}
        />
        <Resource
          name="Question"
          list={QuestionList}
          edit={QuestionEdit}
          create={QuestionCreate}
          show={QuestionShow}
        />
        <Resource
          name="GameLevel"
          list={GameLevelList}
          edit={GameLevelEdit}
          create={GameLevelCreate}
          show={GameLevelShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;