import fragranceImage from '../../../assets/fragrance-placeholder.png'
import type { ProductCardProps } from './product-data-test'
import './product-card.css'

/**
 * Re-usable product card component designed for use in a web-store 
 * 
 * @param {ProductCardProps} props - The component properties.
 * @param props.perfumeObj - The perfume product data to display.
 * @returns A product card containing the perfume image, title, notes, and price.
 */
const ProductCard = ({ perfumeObj }: ProductCardProps) => {

    const { title, notes, price } = perfumeObj;

    const productNameFormatting = (scentName: string) => {
        return scentName.toUpperCase()
    }
    return (
        <>
            <article className="product-card">
                <img 
                    className="product-image" 
                    src={fragranceImage} 
                    alt='Fragrance bottles'
                />
                <div className="product-description">
                    <h1>{productNameFormatting(title)}</h1>
                    <p className="perfume-notes"> 
                        Notes of: {notes}
                    </p>
                    <div className="price">{price}</div>
                </div>
            </article>
        </>
    )
} 
export default ProductCard;