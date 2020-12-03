# ClassifiedAds

Geidy Ducuara Ruiz 200419082

- I made my own css: web pages, font, colors, buttons etc 
- I added carousel with pictures in the home page 'https://www.w3schools.com/bootstrap4/bootstrap_carousel.asp'
- I added a message in the register view to indicate  to user what are the requirements of the password ''Your password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
- I create 2 view, "New Products" with a table that only show new products and  "Used Products"with a table that only show used products. using:
 {{#each products}}
        {{#if usedProduct}}
        {{else}}
 {{/if}}
        {{/each}}
- I added Keyword Search in all the tables of the website
- I added a geolocation API to get the location of the device (latitude and longitude) in order to check it in a map using `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`
