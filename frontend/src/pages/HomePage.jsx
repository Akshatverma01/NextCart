import { Container, SimpleGrid, Text, VStack ,useColorModeValue,Box} from "@chakra-ui/react";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/Productcard.jsx" ;
import Carousel from "../components/productCarousal.jsx";
import { use } from "react";

const HomePage = () => {
	const { getProducts, products } = useProductStore();

	useEffect(() => {
		getProducts();
	}, []);

	const [images,setImages] = useState([]);

	useEffect(() => {
		if(products && products.length>0){
			const images = products.map((product) => product.image);
			setImages(images);
		}
	}, [products]);

	return (
		<Container maxW='90%' pb={12} >
		<Box  mx='auto' w="100%"  >

			<Carousel images={images} />
		</Box>
			<VStack spacing={8} mt={20}>
				<Text
					fontSize={{base:"40",sm:"50",md:"50",lg:"60"}}
					fontWeight={"bold"}
					textAlign={"center"}
					color={useColorModeValue("gray.800", "gray.200")}
				>
					Explore Our Products 🚀
				</Text>

				<SimpleGrid
					columns={{
						base: 1,
						md: 2,
						lg: 3,
					}}
					spacing={10}
					w={"80%"}
				>
					{products.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</SimpleGrid>

				{products.length === 0 && (
					<Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
						No products found 😢{" "}
						<Link to={"/create"}>
							<Text as='span' color='blue.500' _hover={{ textDecoration: "underline" }}>
								Create a product
							</Text>
						</Link>
					</Text>
				)}
			</VStack>
		</Container>
	);
};
export default HomePage;