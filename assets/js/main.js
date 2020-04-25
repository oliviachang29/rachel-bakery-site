var feed = new Instafeed({
    limit: 10,
    accessToken: InstagramToken,
    transform: function(item) {
    	console.log(item)
        const tags_separation_character = '. . .';
        if (item.caption.indexOf(tags_separation_character) > -1) {
            item.caption = item.caption.slice(0, item.caption.indexOf(tags_separation_character))
        }
        item.caption = item.caption.replace(/(?:\r\n|\r|\n)/g, '<br>');
        item.timestamp = moment(item.timestamp).format('MMM DD, YYYY')

	    // return the modified item
	    return item;
    },
    template: `<div class="instagram-post">
    				<a class="feed-image-container" href="{{link}}">
    					<img src="{{image}}" />
    				</a>
    				<div class="caption">
    					<p>{{caption}}</p>
    					<p class="timestamp">{{timestamp}}
    				</div>
    			</div>`
});
feed.run();