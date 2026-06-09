
export default async function ProductPage({ params }: { params: { slug: string } }) {
    const product = await fetch(`API_URL/api/products/${params.slug}`)

    return <div>productName</div>
}