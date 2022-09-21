import { FunctionComponent } from 'react'

import ProductItems from 'src/client/presentation/Products/components/ProductItems'
import Product from 'src/client/presentation/Products/types/Product'
import { StyledItemListingHeader, StyledItemListingWrapper } from './ItemListing.styled'

type Props = {
  allProducts: Product[]
}

const ItemListing: FunctionComponent<Props> = ({ allProducts }) => {
  const recentItems = allProducts.slice(0, 5)

  return (
    <>
      <StyledItemListingHeader variant="h2">Najczęściej kupowane</StyledItemListingHeader>
      <StyledItemListingWrapper>
        {recentItems.map((item) => (
          <ProductItems
            key={item._id}
            id={item._id}
            title={item.title}
            price={item.price}
            description={item.description}
            category={item.category}
            image={item.image}
          />
      ))}
      </StyledItemListingWrapper>
    </>
  )
}

export default ItemListing
