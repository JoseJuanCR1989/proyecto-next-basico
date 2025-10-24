
export default async function page({ params }: { params: { nombre: [] } }) {
    const { nombre } = await params;

    return (
        <div>
            <h1 className="text-2xl font-bold"> Productos </h1>

            <ul>
                {
                    nombre?.map((el, idx) => (<li key={idx}>{el}</li>))
                }
            </ul>
        </div>
    )
}