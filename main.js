const app = Vue.createApp({
    data() {
        return {
            product: 'Shoes',
            productDes: 'We have two kinds of socks, green and purple.',
            image: './assets/images/socks_green.jpg',
            Link: 'http://www.camt.cmu.ac.th',
            inStock: true,
            inventory: 100,
            Onsale: true,
            count:10,
            details:['50% cotton','30% wool','20% polyester'],
            variants: [
                { id:2234,color: 'green' ,image: './assets/images/socks_green.jpg'},
                { id:2235,color: 'blue' ,image: './assets/images/socks_blue.jpg'}
            ],
            sizes: [
                { id:1,size:'S  '},
                { id:2,size:'M  '},
                { id:3,size:'L  '}
            ],
            cart:0
        }
        
    },
    methods: {
        addToCart(){
            this.cart = this.cart + 1
        },
        updateImage(variantImage){
            this.image = variantImage
        },
        ToggleStockStatus(){
            this.inStock = !this.inStock
        }
    }
})

