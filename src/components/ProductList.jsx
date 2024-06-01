
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FetchProducts, incrementSkip } from '../features/ProductsSlice';
import { ProductCard } from './ProductCard';
import Styles from '../styles/Products.module.css'


export const ProductList = () => {
  const dispatch = useDispatch();
  const { items, status, error, limit, skip } = useSelector((state) => state.products);

  const [showAllProducts, setShowAllProducts] = useState(false)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(FetchProducts({ limit, skip }));
    }
  }, [status, dispatch, limit, skip]);

  const handleToggleProducts = () => {
    if (showAllProducts) {
      setShowAllProducts(false);
    } else {
      dispatch(incrementSkip());
      dispatch(FetchProducts({ limit, skip: skip + limit }));
      setShowAllProducts(true);
    }
  };

  const getUniqueItems = (items) => {
    const seen = new Set();
    return items.map((item, index) => {
      if (seen.has(item.id)) {
        return { ...item, id: `${item.id}-${index}` };
      } else {
        seen.add(item.id);
        return item;
      }
    });
  };

  const uniqueItems = getUniqueItems(items);
  const displayedItems = showAllProducts ? uniqueItems : uniqueItems.slice(0, 10);

  let content;

  if (status === 'loading') {
    content = <p>Loading...</p>;
  } else if (status === 'succeeded') {
    content = (
      <div className={Styles.productGrid}>
        {displayedItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  } else if (status === 'failed') {
    content = <p>{error}</p>;
  }

  return (
    <main className={`${Styles.productListMain} ${showAllProducts ? Styles.expanded : ''}`}>
      <section className={Styles.productListSection1}>
          <section className={Styles.productlListHeading}>
            <h4>Featured Products</h4>
            <h3>BESTSELLER PRODUCTS</h3>
            <p>Problems trying to resolve the conflict between </p>
          </section>
          <section className={Styles.productList}>
            {content}
            {items.length > 10 && (
            <ToggleShowAllButton
              onClick={handleToggleProducts}
              showAllProducts={showAllProducts}
            />
          )}
          </section>
      </section>
    </main>
  );
};


  const ToggleShowAllButton = ({ onClick, showAllProducts }) => (
      <div className={Styles.toggleShowAllButton}>
        <button onClick={onClick}>
          {showAllProducts ? 'Collapse' : 'Load More Products'}
        </button>
      </div>
  );

