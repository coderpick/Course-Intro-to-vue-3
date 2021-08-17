const app = Vue.createApp({
    data() {
        return{
            cart:0,
            product:'Mobile',
            details:['50% cotton','30% wool','20% polyester'],
            variants:[
                { id:2234,color:'green','image':'./assets/images/socks_green.jpg'},
                { id:2235,color:'blue','image':'./assets/images/socks_blue.jpg'},
            ],
            sizes:['S','M','L'],
            inventory:0,
            image:'./assets/images/socks_blue.jpg',
            url:'facebook.com/coderpick'
        }
        
    },
    methods: {
        addToCart() {
            this.cart +=1
        },
        updateImage (variantImage){
            this.image = variantImage
        }
    }
})