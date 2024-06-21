import { defineStore } from 'pinia'

export const useCartsStore = defineStore('carts', {
    state: () => {
        return { 
            items: [],
            totalItem: 0,
            totalPrice: 0,
        }
    },

    persist: true,

    getters: {
        addCartItems: state => state.items,

    },

    actions: {
        addToCart(data) {
            
            let checkExits = this.items.filter(exitItem =>  exitItem.id === data.id);
            if(checkExits.length > 0){
                checkExits[0].qty +=1;
                checkExits[0].total = (checkExits[0].qty * checkExits[0].price);
                

            }else{
                data.qty = 1;
                this.items.push(data);
            }

            // Get total item & total price
            this.totalItem = this.items.reduce((acc, item) => acc + item.qty, 0);
            this.totalPrice = this.items.reduce((acc, item) => acc + (item.price * item.qty), 0);
        },
    },
})