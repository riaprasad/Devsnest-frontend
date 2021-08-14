import { useEffect } from "react";
import { loadProducts } from "../redux";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { Item, stateProps } from "../models/product";

export default function useProducts(): Item[] {
  const dispatch = useAppDispatch();
  const prods = useAppSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(loadProducts());
  }, []);
  return prods;
}
