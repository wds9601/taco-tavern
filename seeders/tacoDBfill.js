var db = require('../models')
var axios = require('axios')


var tacoUrl = 'http://taco-randomizer.herokuapp.com/random/?full-taco=true'
axios.get(tacoUrl)
.then((apiResponse) => {
    var taco = apiResponse.data
    // console.log(taco)

    var condName = taco.condiment ? taco.condiment.name : null
    var condRec = taco.condiment ? taco.condiment.recipe : null
    var condUrl = taco.condiment ? taco.condiment.url : null
    
    var mixName = taco.mixin ? taco.mixin.name : null
    var mixRec = taco.mixin ? taco.mixin.recipe : null
    var mixUrl = taco.mixin ? taco.mixin.url : null


    var shName = taco.shell ? taco.shell.name : null
    var shRec = taco.shell ? taco.shell.recipe : null
    var shUrl = taco.shell ? taco.shell.url : null

    // console.log(
    //     'name:', taco.name,
    //     'recipe:', taco.recipe,
    //     'recipeUrl:', taco.url,
    //     'baseName:', taco.base_layer.name,
    //     'baseRecipe:', taco.base_layer.recipe,
    //     'baseUrl:', taco.base_layer_url,
    //     'condimentName:', condName,
    //     'condimentRecipe:', condRec,
    //     'condimentUrl:', condUrl,
    //     'mixinName:', mixName,
    //     'mixinRecipe:', mixRec,
    //     'mixinUrl:', mixUrl,
    //     'shellName:', shName,
    //     'shellRecipe:', shRec,
    //     'shellUrl:', shUrl
    // )

    db.tacos.findOrCreate({
        where: { 
            name: taco.name,
            recipe: taco.recipe,
            recipeUrl: taco.url,
            baseName: taco.base_layer.name,
            baseRecipe: taco.base_layer.recipe,
            baseUrl: taco.base_layer_url,
            condimentName: condName,
            condimentRecipe: condRec,
            condimentUrl: condUrl,
            mixinName: mixName,
            mixinRecipe: mixRec,
            mixinUrl: mixUrl,
            shellName: shName,
            shellRecipe: shRec,
            shellUrl: shUrl
        }
    })
    .then(([newTaco, wasCreated]) => {
        if (wasCreated) {
            console.log(`${newTaco} was created: ${wasCreated}`)
        } else {
            console.log(`Error`);
        }
    })
})
.catch((err) => {
    console.log('ERROR', err)
}) 