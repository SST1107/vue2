let pageData = {
    pageName:'Book a Cruise to the Moon',
    pageductDescription:'Cruise to the Moon in our luxurious shuttle. Watch the asteronauts working outside the International Space Station.',
    imageSrc:[
        "images/asteroid.jpg",
        "images/fantasy.jpg",
        "images/space.jpg",
        "images/spaceship.jpg"
    ],
    productClasses:[
        {
            name:'Coach',
            price:12500,
            seatsAvailable:20,
            earlyBird:true
        },
        {
            name:'Business',
            price:275000,
            seatsAvailable:6,
            earlyBird:true
        },
        {
            name:'First',
            price:430000,
            seatsAvailable:2,
            earlyBird:false
        }
    ],
    h2ClassController:{
        centered:true,
        colorFont:true
    },
    pStyleController:{
        'margin-left':'50px',
        color:'blue',
        'font-size':'20px',
        'font-style':'italic'
    },
    imageStyleController:{
        margin:'auto',
        display:'block',
        width:'50%'
    },
    imageAlt:"Photo from space"
};

const App=Vue.createApp({
    data(){
        return pageData;
    }
});
App.mount("#app");