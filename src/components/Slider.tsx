import { useSelector } from "react-redux";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import ProductCard from "./Card";
import { pxToRem } from "../utils";
import { FETCH_PRODUCTS } from "../service/products";
import { FILTER_PRODUCTS } from "../utils/product";
import type { Product } from "../types/product";
import type { RootState } from "../redux/store";

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const answers = useSelector((state: RootState) => state.quiz.answers);
  const wishlist = useSelector((state: RootState) => state.wishlist.product);

  const [products, setProducts] = useState<Product[]>([]);
  const [canScroll, setCanScroll] = useState({ prev: false, next: false });

  const updateScrollButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanScroll({
      prev: emblaApi.canScrollPrev(),
      next: emblaApi.canScrollNext(),
    });
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    const fetchAndFilterProducts = async () => {
      const allProducts = await FETCH_PRODUCTS();
      const filtered = FILTER_PRODUCTS(allProducts, answers, wishlist);
      setProducts(filtered);
      console.log("allProducts", allProducts);
    };

    fetchAndFilterProducts();
  }, [answers]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", updateScrollButtons);
    emblaApi.on("reInit", updateScrollButtons);
    updateScrollButtons();

    return () => {
      emblaApi.off("select", updateScrollButtons);
      emblaApi.off("reInit", updateScrollButtons);
    };
  }, [emblaApi, updateScrollButtons]);

  return (
    <Box sx={{ mt: 4, px: pxToRem(isMobile ? 16 : 40) }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        {products.length > 0 && (
          <IconButton
            onClick={scrollPrev}
            disabled={!canScroll.prev}
            sx={{
              width: 40,
              height: 40,
              boxShadow: 2,
              flexShrink: 0,
              bgcolor: "white",
            }}
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>
        )}
        {products.length > 0 && (
          <Box ref={emblaRef} sx={{ width: "100%", overflow: "hidden" }}>
            <Box
              className="embla__container"
              sx={{
                px: 1,
                gap: 2,
                display: "flex",
                py: 1,
              }}
            >
              {products &&
                products.map((product) => (
                  <Box
                    key={product.id}
                    className="embla__slide"
                    sx={{
                      flex: "0 0 auto",
                      width: "fit-content",
                      maxWidth: "fit-content",
                    }}
                  >
                    <ProductCard product={product} />
                  </Box>
                ))}
            </Box>
          </Box>
        )}
        {products.length === 0 && (
          <Box
            sx={{
              width: "100%",
              height: "300px",
              display: "flex",
              alignItems: "center",
              fontSize: pxToRem(24),
              fontFamily: "sans-serif",
              justifyContent: "center",
            }}
          >
            No result
          </Box>
        )}
        {products.length > 0 && (
          <IconButton
            onClick={scrollNext}
            disabled={!canScroll.next}
            sx={{
              width: 40,
              height: 40,
              boxShadow: 2,
              flexShrink: 0,
              bgcolor: "white",
            }}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        )}{" "}
      </Box>
    </Box>
  );
};

export default EmblaCarousel;
