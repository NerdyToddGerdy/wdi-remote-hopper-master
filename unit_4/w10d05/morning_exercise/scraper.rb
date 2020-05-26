require 'open-uri'
require 'Nokogiri'

doc = Nokogiri::HTML(open("https://en.wikipedia.org/wiki/List_of_original_programs_distributed_by_Netflix"))

# puts doc

# puts tableData = doc.css("table")

# puts textTableData = doc.css("table").text

allTitles = doc.css("a")

allTitles.each do |item|
   title = item.text
   if title.size > 0
      puts "Title is #{title}"
   end
end
