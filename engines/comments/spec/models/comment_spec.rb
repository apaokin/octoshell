module Comments
	
	require "spec_helper"
	

	describe Comment do
		before(:each) do 
			@user = create(:user)
			@project = create_project
			@project2 = create_project
			@comment = create(:comment,{attachable: @project,user: @user} )
			@comment2 = create(:comment,{attachable:@project2,user: @user} )
			 create(:comment,{attachable: create_project,user: @user} )

		end		
		

		it "gets comments for relation arg " do
			puts Comment.get_items(Core::Project.limit(1)).to_sql
			expect(Comment.get_items(Core::Project.limit(1))).to eq [@comment]
			

		end
		it "gets comments for array  arg " do
			
			expect(Comment.get_items([@project,@project2])).to eq [@comment,@comment2]

		end
		it "gets comments for model  arg " do
			
			expect(Comment.get_items(@project)).to eq [@comment]

		end

	end
		
	
		


end
