# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list
json.extract!(@board, :title, :id)
json.lists @board.lists.each do |list|
		json.extract!(list, :id, :title)
		
	json.cards list.cards.each do |card|
				json.extract!(card,:id, :title)
		end
	end
