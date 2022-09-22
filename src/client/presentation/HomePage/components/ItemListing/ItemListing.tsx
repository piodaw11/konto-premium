import { FunctionComponent } from 'react'

import ProductItems from 'src/client/presentation/Products/components/Items/ProductItems'
import Product from 'src/client/presentation/Products/types/Product'
import { StyledItemListingHeader, StyledItemListingWrapper } from './ItemListing.styled'

type Props = {
  allProducts: string
}

const ItemListing: FunctionComponent<Props> = ({ allProducts }) => {
  const recentItems = JSON.parse(allProducts).slice(0, 5)

  return (
    <>
      <StyledItemListingHeader variant="h2">Najczęściej kupowane</StyledItemListingHeader>
      <StyledItemListingWrapper>
        {recentItems.map((item: Product) => (
          <ProductItems
            key={item._id}
            id={item._id}
            title={item.title}
            price={item.price}
            image={item.image}
          />
      ))}
      </StyledItemListingWrapper>
    </>
  )
}

export default ItemListing
