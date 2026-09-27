import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import NotFound from "./components/NotFound"
import "./App.css"

// Define las vistas que corresponden a cada URL de la aplicación.
function App() {
    return (
        <>
            <Navbar />

            <main>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <ItemListContainer
                                greeting="Joyas para quienes hacen de su identidad una estética"
                            />
                        }
                    />

                    <Route
                        path="/category/:categoryId"
                        element={
                            <ItemListContainer
                                greeting="Explorá nuestra selección"
                            />
                        }
                    />

                    <Route
                        path="/item/:itemId"
                        element={<ItemDetailContainer />}
                    />

                    <Route
                        path="*"
                        element={<NotFound />}
                    />
                </Routes>
            </main>
        </>
    )
}

export default App
