import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProducts } from "../mock/asyncMock"
import ItemList from "./ItemList"
import "./ItemListContainer.css"

// Obtiene el catálogo completo o la categoría indicada en la URL.
function ItemListContainer({ greeting }) {
    const { categoryId } = useParams()

    const [items, setItems] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        async function cargarProductos() {
            setCargando(true)
            setError("")
            setItems([])

            try {
                const productosRecibidos =
                    await getProducts(categoryId)

                setItems(productosRecibidos)
            } catch {
                setError(
                    "No pudimos cargar las joyas. Intentá nuevamente.",
                )
            } finally {
                setCargando(false)
            }
        }

        cargarProductos()
    }, [categoryId])

    const tituloCatalogo = categoryId
        ? `${greeting}: ${categoryId}`
        : greeting

    return (
        <section
            id="catalogo"
            className="catalogo"
            aria-labelledby="titulo-catalogo"
        >
            <header className="catalogo__encabezado">
                <p className="catalogo__etiqueta">
                    Suscripción mensual de joyas
                </p>

                <h1
                    id="titulo-catalogo"
                    className="catalogo__titulo"
                >
                    {tituloCatalogo}
                </h1>

                <p className="catalogo__descripcion">
                    Una selección diferente para combinar,
                    mezclar y hacer propia.
                </p>
            </header>

            {cargando && (
                <p
                    className="catalogo__estado"
                    role="status"
                >
                    Preparando la selección...
                </p>
            )}

            {error && (
                <p
                    className="catalogo__estado catalogo__estado--error"
                    role="alert"
                >
                    {error}
                </p>
            )}

            {!cargando && !error && items.length === 0 && (
                <p className="catalogo__estado">
                    No encontramos joyas en esta categoría.
                </p>
            )}

            {!cargando && !error && items.length > 0 && (
                <ItemList items={items} />
            )}
        </section>
    )
}

export default ItemListContainer