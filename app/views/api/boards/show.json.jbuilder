# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list
json.extract!(@board, :title, :user, :lists)
	@board.lists.each do |list|
		json.extract!(list, :title, :cards)
	end
