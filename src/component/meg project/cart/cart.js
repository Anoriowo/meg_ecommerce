// for add to cart
export const addCart = (product) => {
    return{
        type: "ADDCART",
        payload: product
    }
}

// for delete from cart