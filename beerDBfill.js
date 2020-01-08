var db = require('./models')
var axios = require('axios')



//API URL to call
var beerUrl = 'https://api.punkapi.com/v2/beers'
//Use request to call API
axios.get(beerUrl)
.then((apiResponse) => {
    // console.log(apiResponse.data)
    var beer = apiResponse.data
    // console.log(beer[0].image_url)
    
    beer.forEach((item) => {
        var hopsArr = []
        var paringArr = []
        item.ingredients.hops.forEach(hop => {
            hopsArr.push(hop.name)
        })
       
        // console.log(
        //     'name:', item.name,
        //     'tagline:', item.tagline,
        //     'description:', item.description,
        //     'abv:', item.abv,
        //     'hops:', hopsArr,
        //     'foodPairing:', item.food_pairing,
        //     'imgUrl:', item.image_url
        // )

        db.beers.create({
            name: item.name,
            tagline: item.tagline,
            description: item.description,
            abv: item.abv,
            hops: JSON.stringify(hopsArr),     //beer[i].ingredients.hops[i].name
            foodPairing: JSON.stringify(item.food_pairing),      //beer[i].food_pairing
            imgUrl: item.image_url
        })
    
    })
    console.log('SUCCESS!!!')
})
.catch((err) => {
    console.log('ERROR', err)
})  