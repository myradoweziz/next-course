import Hero from '@/components/HERO/Hero'
import Catalog from '@/components/catalog/Catalog'
import { ProductService } from '@/services/product.service'

async function getProducts() {
  const data = await ProductService.getAll()

  return data
}

export default async function HomePage() {
  const data = await getProducts()

  return (
    <div className='bg-white pb-6 sm:pb-8 lg:pb-12'>
      <Hero />
      <Catalog products={data} isFull={false} />
    </div>
  )
}
