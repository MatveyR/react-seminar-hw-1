import React from 'react';
import styles from './ProductList.module.css';

interface ProductListProps {
    items: string[][]
}

const ProductList: React.FC<ProductListProps> = ({items}) => {
    return (
        <div>
            {items.map((item) =>
                <li className={styles['product-list']}>
                    <span>{"Название: " + item[0] + ";   "}</span>
                    <span>{"Цена: " + item[1]}</span>
                </li>
            )}
        </div>
    );
};

export default ProductList;