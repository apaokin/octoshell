FactoryGirl.define do
  factory :comment, :class => "Comments::Comment" do
  	text "comment"
   	user 
   	association :attachable, factory: :user
 
    
  end
end
