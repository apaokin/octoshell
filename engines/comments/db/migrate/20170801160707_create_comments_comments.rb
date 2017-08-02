class CreateCommentsComments < ActiveRecord::Migration
  def change
    create_table :comments_comments do |t|
 	  t.string :text
 	  t.references :attachable, polymorphic: true
      t.references :user
      t.timestamps null: false
    end
  end
end
