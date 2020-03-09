# Taco Tavern
http://taco-tavern.herokuapp.com/

This revolutionary app allows a user to browse our celebrated beer cellar and add selections to their personal favorites list. Additionally, users can add their own beer recommendations to the vault so that other Taco Tavern friends can view and favorite them. Whats so extraordinary about a beer app, you ask?  Tacos.  Taco Tavern also allows users to browse a mouth-watering list of creative taco recipes, which can be added a your Favorite Tacos list.  From a user's profile page, they can see all their favorite brews and tacos - the perfect way to kick off the weekend!

## Technologies used
* HTML/CSS
* JavaScript
* Express
* Node
* PostgreSQL
* Sequelize (ORM)

# User Story
* As a guest to the app I can:
    * Browse through lists of beers and taco recipes.
    * See details about the beers and recipes.
* As a logged-in user on the app I can also:
    * Create a profile and bio.
    * Add beers or tacos to my Favorites list and view them in my profile.
    * Add new beers to the Taco Tavern cellar list.
    * Add new taco recipes to the Taco Tavern recipe list.

## Development process
- Jan 5, 2020
    - Finalized app idea and researched possible APIs to use for beer and taco recipe data
    - Began forming models for SQL database
    - Sketched out basic user flow through app, app features
- Jan 6, 2020
    - Began degigning and constructing webpage
    - Created backend routes
    - Inital data display on page
    - Running into issues with db modeling and form of returned API data
- Jan 7, 2020
    - Worked on restructuring db models to better reflect user input as well as API data
    - Continue to develop webpage, adding forms and basic functionality
- Jan 8, 2020
    - Worked on updating backend routes and added PUT and DELETE routes for user bio and user favorites
- Jan 9, 2020
    - Finalized routes and functionality
    - Tinkered with display of data on webpage
    - Added styling and background image

# App Routes
| Method | Path | Location | Purpose |
| ------ | ---------------- | --------------- | ------------------------ |
| GET | / | index.js | Home Page |
| GET | * | index.js | Render error/404 page |
| GET | /auth/login | auth.js | Login Form |
| GET | /auth/signup | auth.js | Signup Form |
| POST | /auth/login | auth.js | Login user |
| POST | /auth/signup | auth.js | Creates user |
| GET | /auth/logout | auth.js | Removes session info |

| Method | Path | Location | Purpose |
| ------ | ---------------- | --------------- | ------------------------ |
| GET | /beer | beer.js | Render beer list page |
| GET | /beer/addBeer | beer.js | Add New Beer Form |
| GET | /beer/:id | beer.js | Single beer details page|
| POST | /beer/addBeer | beer.js | Add new beer to the cellar list |
| POST | /beer/:id | beer.js | Add beer to user favorite list |

| Method | Path | Location | Purpose |
| ------ | ---------------- | --------------- | ------------------------ |
| GET | /profile | profile.js |  User Profile |
| GET | /profile/edit | profile.js | Edit user bio form |
| PUT | /profile | profile.js | Update user bio in db |
| DELETE | /profile | profile.js | Delete a favorite item |

| Method | Path | Location | Purpose |
| ------ | ---------------- | --------------- | ------------------------ |
| GET | /tacos | taco.js | Render taco list page |
| GET | /tacos/addTaco | taco.js | Add New Taco Form |
| GET | /tacos/:id | taco.js | Single taco recipe page|
| POST | /tacos/addTaco | taco.js | Add new taco to the recipes list |
| POST | /tacos/:id | taco.js | Add taco to user favorite list |

# Table Models
## User
| Column Name | Data Type | Notes |
| ----------------- | ---------------- | ---------------------------------- |
| id | Integer | Serial Primary Key |
| createdAt | Date | Auto-generated |
| updatedAt | Date | Auto-generated |
| firstname | String | Must be provided |
| lastname | String | - |
| email | String | Must be unique / used for login |
| password | String | Stored as hash |
| bio | Text | - |
| githubId | String | - |
| githubToken | String | - |

## Beer
| Column Name | Data Type | Notes |
| ----------------- | ---------------- | ---------------------------------- |
| id | Integer | Serial Primary Key |
| createdAt | Date | Auto-generated |
| updatedAt | Date | Auto-generated |
| name | String | Must be provided |
| tagline | String | - |
| description | Text | - |
| abv | Integer | - |
| hops | String | - |
| foodPairing | Text | - |

## Tacos
| Column Name | Data Type | Notes |
| ----------------- | ---------------- | ---------------------------------- |
| id | Integer | Serial Primary Key |
| createdAt | Date | Auto-generated |
| updatedAt | Date | Auto-generated |
| name | String | Must be provided |
| recipe | String | - |
| recipeUrl | String | - |
| baseName | String | - |
| baseRecipe | Text | - |
| baseUrl | String | - |
| condimentName | String | - |
| condimentRecipe | Text | - |
| condimentUrl | String | - |
| mixinName | String | - |
| mixinRecipe | Text | - |
| mixinUrl | String | - |
| shellName | String | - |
| shellRecipe | Text | - |
| shellUrl | String | - |

# Development Notes
## Goals:
* Have a user browse through lists of tacos and beers
* Have a user Favorite beer and tacos to their profile page
* Have a user add new beers and new taco recipes to the community lists
* Have a user edit their bio in their profile page
* Have a user delete items from their favorites lists

## "If I had another week" Additional Features:
* On beer details page display tacos that match food pairing recommendations
* On taco recipe page display beers that would compliment the recipe
* Button to get a user a random pairing of a beer and a taco
* Theme Styling and data display styling
