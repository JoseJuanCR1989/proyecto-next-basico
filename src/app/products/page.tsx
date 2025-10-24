
export default function page({ params }: { params: { nombre: [] } }) {
    return (
        <div>
            <h1 className="text-2xl font-bold"> Categoria: {params.nombre.join(', ')} </h1>

        </div>
    )
}