import { Authenticated, Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import {
  ErrorComponent,
  notificationProvider,
  RefineSnackbarProvider,
  ThemedLayoutV2,
} from "@refinedev/mui";

import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import {
  CompaniesCreate,
  CompaniesEdit,
  CompaniesList,
  CompaniesShow
} from "pages/companies";

import {
  PillarCreate,
  PillarEdit,
  PillarShow,
  PillarList
} from "pages/pillars";

import {
  MarketResearchCreate,
  MarketResearchEdit,
  MarketResearchShow,
  MarketResearchList
} from "pages/marketResearch";



import { ForgotPassword } from "pages/forgotPassword";
import { Login } from "pages/login";
import { Register } from "pages/register";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { authProvider } from "./authProvider";
import { Header } from "./components/header";
import { ColorModeContextProvider } from "./contexts/color-mode";

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <CssBaseline />
          <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
          <RefineSnackbarProvider>
              <Refine
                dataProvider={dataProvider("http://localhost:3001/api")}
                notificationProvider={notificationProvider}
                routerProvider={routerBindings}
                authProvider={authProvider}
                resources={[
                  {
                    name: "companies",
                    list: "/companies",
                    create: "/companies/create",
                    edit: "/companies/edit/:id",
                    show: "/companies/show/:id",
                    meta: {
                      canDelete: true,
                    },
                  },
                  /*{
                    name: "marketResearch",
                    list: "/marketResearch",
                    create: "/marketResearch/create",
                    edit: "/marketResearch/edit/:id",
                    show: "/marketResearch/show/:id",
                    meta: {
                      canDelete: true,
                    },
                  },*/
                  {
                    name: "pillars",
                    list: "/pillars",
                    create: "/pillars/create",
                    edit: "/pillars/edit/:id",
                    show: "/pillars/show/:id",
                    meta: {
                      canDelete: true,
                    },
                  },
                  /*{
                    name: "categories",
                    list: "/categories",
                    create: "/categories/create",
                    edit: "/categories/edit/:id",
                    show: "/categories/show/:id",
                    meta: {
                      canDelete: true,
                    },
                  },*/
                ]}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: "mCnGZp-7cMrHd-utcyf8",
                }}
              >
                <Routes>
                  <Route
                    element={
                      <Authenticated
                        key="authenticated-inner"
                        fallback={<CatchAllNavigate to="/login" />}
                      >
                        <ThemedLayoutV2
                          Header={() => <Header isSticky={true} />}
                        >
                          <Outlet />
                        </ThemedLayoutV2>
                      </Authenticated>
                    }
                  >
                    <Route
                      index
                      element={<NavigateToResource resource="companies" />}
                    />
                    <Route path="/companies">
                      <Route index element={<CompaniesList />} />
                      <Route path="create" element={<CompaniesCreate />} />
                      <Route path="edit/:id" element={<CompaniesEdit />} />
                      <Route path="show/:id" element={<CompaniesShow />} />
                    </Route>
                    <Route path="/marketResearch">
                      <Route index element={<MarketResearchList />} />
                      <Route path="create" element={<MarketResearchCreate />} />
                      <Route path="edit/:id" element={<MarketResearchEdit />} />
                      <Route path="show/:id" element={<MarketResearchShow />} />
                    </Route>
                    <Route path="/pillars">
                      <Route index element={<PillarList />} />
                      <Route path="create" element={<PillarCreate />} />
                      <Route path="edit/:id" element={<PillarEdit />} />
                      <Route path="show/:id" element={<PillarShow />} />
                    </Route>
                    <Route path="*" element={<ErrorComponent />} />
                  </Route>
                  <Route
                    element={
                      <Authenticated
                        key="authenticated-outer"
                        fallback={<Outlet />}
                      >
                        <NavigateToResource />
                      </Authenticated>
                    }
                  >
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                      path="/forgot-password"
                      element={<ForgotPassword />}
                    />
                  </Route>
                </Routes>

                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
              </Refine>
          </RefineSnackbarProvider>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
