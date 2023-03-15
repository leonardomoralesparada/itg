import Product from "../Product";
import { Image } from "../../assets";

const ProductGallery = () => (
    <div className="product-gallery">
        <Product isOnlyProduct={false} isButtonShop />
        <Product 
            title={'Sombrilla'} 
            description={'Este es un producto que permite protegerse de la lluvia y el sol'}
            image={Image.sombrilla}
            textButton={'ver más'}
            onClick={() => alert('Hola')}
        />
        <Product 
            title={'Telefono'} 
            description={'Este es un producto que permite comunicarnos con nuestro familiares'}
            image={Image.telefono}
            textButton={'ver más'}
            onClick={() => alert('Hola')}
        />
        <Product 
            isOnlyProduct={false}
            classNameBg="tower"
        />
        <Product 
            isOnlyProduct={false}
            classNameBg="women"
        />
        <Product 
            title={'Carro'} 
            description={'Este es un producto que permite movilizarnos entre ciudades'}
            image={Image.carro}
            textButton={'ver más'}
            onClick={() => alert('Hola')}
        />
        <Product 
            title={'Licuadora'} 
            description={'Este es un producto que nos permite hacer jugos de frutas'}
            image={Image.licuadora}
            textButton={'más info'}
            onClick={() => alert('Hola')}
        />
        <Product 
            isOnlyProduct={false}
            classNameBg="children"
        />
    </div>
);

export default ProductGallery;