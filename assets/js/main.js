var feed = new Instafeed({
    accessToken: InstagramToken,
    transform: function(item) {
    	console.log(item)
    	item.caption = item.caption.replace(/(?:\r\n|\r|\n)/g, '<br>');
    	 item.timestamp = new Date(item.timestamp).toLocaleString('en-US', {
	        year: 'numeric', 
	        month: 'long', 
	        day: 'numeric'
	      });

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