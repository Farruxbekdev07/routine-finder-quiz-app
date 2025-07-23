import {
  Card,
  CardMedia,
  IconButton,
  Typography,
  CardContent,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { pxToRem } from "../utils";
import type { Product } from "../types/product";
import type { RootState } from "../redux/store";
import { toggleWishlist } from "../redux/reducers/wishlist";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { tags, title, images, variants } = product;

  const dispatch = useDispatch();
  const wishlist =
    useSelector((state: RootState) => state.wishlist.product) || [];
  const isWished = wishlist?.some((p) => p.id === product.id);

  return (
    <Card
      sx={{
        boxShadow: 4,
        borderRadius: 3,
        position: "relative",
        width: `${pxToRem(350)}`,
        height: `${pxToRem(450)}`,
      }}
    >
      <CardMedia
        alt={title}
        component="img"
        height="300"
        image={images[0]?.src || ""}
        sx={{ objectFit: "contain" }}
      />
      <IconButton
        sx={{
          top: 8,
          right: 8,
          bgcolor: "white",
          position: "absolute",
        }}
        onClick={() => dispatch(toggleWishlist(product))}
      >
        {isWished ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
      </IconButton>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        {variants[0].price ? (
          <Typography variant="body1">{variants[0].price}</Typography>
        ) : (
          <Typography variant="body2" color="text.secondary">
            {tags}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
