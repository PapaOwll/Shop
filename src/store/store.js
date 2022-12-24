import {createStore} from 'vuex'

export const store = createStore({
    state: {
        counter: 0,
        cart: [],
        items:
            [{
                id: 1,
                name: 'Apple 14 ProMax',
                qty: '100',
                price: '1400$',
                count:0,
                img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204',
            },
                {
                    id: 2,
                    name: 'SamSung S22 Ultra',
                    qty: '200',
                    count:0,
                    price: '1200$',
                    img: 'https://m.media-amazon.com/images/I/61YlrrL-HqL._AC_SS450_.jpg'
                },
                {
                    id: 3,
                    name: 'Xiaomi mi 11 5G',
                    qty: '250',
                    count:0,
                    price: '750$',
                    img: 'https://i5.walmartimages.com/asr/c714d92d-d847-480c-b929-677bdc5bccff.93ae0627719b48ab80c67f0686a63b36.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
                },
                {
                    id: 4,
                    name: 'Huawei Nova 7i',
                    qty: '110',
                    count:0,
                    price: '260$',
                    img: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/nova7i/nova-7i-list-sakura-pink.png'
                },
                {
                    id: 5,
                    name: 'Sony Xperia 5 ii',
                    qty: '80',
                    count:0,
                    price: '390$',
                    img: 'https://d1eh9yux7w8iql.cloudfront.net/product_images/432868_38696491-61b6-48fb-bcd7-dc2189ffbcce.jpg'
                },
                {
                    id: 6,
                    name: 'Honor 9X',
                    qty: 100,
                    count:0,
                    price: '280$',
                    img: 'https://www.miandmore.co.uk/wp-content/uploads/2019/10/Honor-9x-Blue-2.jpg'
                },
            ],
    },
    mutations: {
        increase(state, item) {
            state.counter++
            state.cart.push(item)
            console.log(state.cart)
        },
        decrease(state, item) {
            state.counter--
            state.cart.pop(item)
            console.log(state.cart.items)
        },
    },
})