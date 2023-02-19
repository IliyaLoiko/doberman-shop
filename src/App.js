import React from "react";
import { Routes, Route } from "react-router-dom";

import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Catalog from "./components/Catalog/Catalog";
import { Layout } from "./Layout/Layout";

function App({cartItems}) {
  const [cartOpened, setCartOpened] = React.useState(false);
  return (
    <>
      {cartOpened && (
        <Drawer 
        items={cartItems}
        onClose={() => setCartOpened(false)}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="catalog" element={<Catalog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
