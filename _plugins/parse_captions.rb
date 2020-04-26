module Jekyll
  module CaptionFilter
    def parse_caption(input)
    	tags_separation_character = @context.registers[:site].data['general']['tags_separation_character']
    	if input.include? tags_separation_character
    		input.slice(0..(input.index(tags_separation_character) - 1))
    	else
    		input
    	end
    end
  end
end

Liquid::Template.register_filter(Jekyll::CaptionFilter)
