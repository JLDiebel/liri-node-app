var Twitter = require('twitter');
var request = require('request');
var keys = require('./keys.js')

var arg = process.argv[2];

var client = new Twitter({
    consumer_key: keys.twitterKeys.consumer_key,
    consumer_secret: keys.twitterKeys.consumer_secret,
    access_token_key: keys.twitterKeys.access_token_key,
    access_token_secret: keys.twitterKeys.access_token_secret,
});

var params = { screen_name: 'Deebs21389354' };

client.get('statuses/user_timeline', params, { count: 20 }, function(error, tweets, response) {
            if (!error) {
                console.log(tweets.txt)};

            });
function movie(title){
	if (title === undefined){
		title = "Mr. Nobody"
	};
}
request("http://www.omdbapi.com/?t=" + 'title', function(error, response, body) {

	if (!error && response.statusCode === 200) {

    console.log(JSON.parse(body).imdbRating);
    console.log(JSON.parse(body).Title);
    console.log(JSON.parse(body).Year);
    console.log(JSON.parse(body).Country);
    console.log(JSON.parse(body).Language);
    console.log(JSON.parse(body).Plot);
    console.log(JSON.parse(body).Actors);
  }
});

