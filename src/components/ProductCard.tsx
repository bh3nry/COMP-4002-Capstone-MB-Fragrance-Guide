import fragranceImage from '../../src/assets/fragrance-placeholder.png'
import type { ProductCardProps } from './product-data-test'
import '../../src/components/product-card.css'

const ProductCard = ({ perfumeObj }: ProductCardProps) => {

    const title = perfumeObj.title;
    const notes = perfumeObj.notes;
    const price = perfumeObj.price;

    const productNameFormatting = (scentName: string) => {
        return scentName.toUpperCase()
    }
    return (
        <>
            <article className="product-card">
                <img 
                    className="product-image" 
                    src={fragranceImage} 
                    aria-label='fragrance-bottles'
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