import { defineStore } from 'pinia'

export const useCartsStore = defineStore('carts', {
    state: () => {
        return { items: {} }
    },

    getters: {
        addCartData: state => state.items,

    },

    actions: {
        addToCart() {
            this.items = 
                {
                    "item_id": 7,
                    "quantity": 2,
                    "item_name": "this the new product",
                    "cruurent_price": 100,
                    "regular_price": 110,
                    "vat": 0,
                    "tax": 0
                }
            
        },
    },
})