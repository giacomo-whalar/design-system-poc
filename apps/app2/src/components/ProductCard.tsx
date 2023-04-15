import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Stack,
  Text,
} from "ui";

interface ProductCardProps {
  image: string;
  price: number;
  children: React.ReactNode;
}

export function ProductCard(props: ProductCardProps) {
  return (
    <Card maxW="sm">
      <Image
        src={props.image}
        borderTopRightRadius="lg"
        borderTopLeftRadius="lg"
      />
      <CardBody>
        <Stack mt="6" spacing="3">
          <Text>{props.children}</Text>
          <Text size="lg" color="primary.500">
            ${props.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="primary">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="primary">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
