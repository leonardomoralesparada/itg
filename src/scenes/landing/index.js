import ProductGallery from "../../components/ProductGallery";
import Slider from "../../components/Slider";
import Footer from "../../components/Footer";
import Newsletters from "../../components/Newsletters";
import NavBar from "../../components/NavBar";

const Landing = () => (
    <>
        <NavBar />
        <Slider />
        <ProductGallery />
        <Newsletters />
        <Footer />
    </>
);

export default Landing;