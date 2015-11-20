# Knocity
## Summary
Knocity will be a wiki-esque style site based on centralized user-generated information for individual cities.  The focus of the site will be 'article' creation  (in a vaguely wiki sense; I need a different word for article) within each city's page.  The primary purposes will be to: <br>
1) aggregrate information about a cities, especially information that is currrently poorly orgranized. Ex. An article about every park in a city, article about men's adult soccer leagues, article about internet coverage within a city, etc... <br>
2) To generate this information in a user-friendly and uniform way across the entire site, hopefully emulating the informational accessibility of wiki style sites. <br>
An underlying goal is to impose minimal standards on the information that resides within each city's page, allowing users to determine what information they feel should be orgranized and represented somewhere within their city's page.
## Technologies

- MEAN Stack
 - Angular
 - MongoDB
 - Node.js
 - Express
 - Satellizer/Local Token-Based Authentication
- Gulp
- Sass (Might fall back on bootstrap)
- Bourbon

### APIs

- Google Maps
- Google Places Autocomplete API
- Weather API

## MVP

* Dynamically generate a standard layout for cities (probably focus on less * than 5 from the beginning)
* Allow users to create an 'article' on a specific topic
* Allow users to edit existing articles
* Organize and categorize created articles within a logical hierarchy intially based on tags

## Additional features

* Develop a standard article format for local businesses (not based on reviews like Yelp, but more so based on usable information about that business)
* Develop a point system for creating and editing articles, hopefully nudging user's to contribute.
* Figure out admin roles, prevent duplicate articles, other logistical considerations.
