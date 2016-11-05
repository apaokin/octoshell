# This migration comes from pack (originally 20161104155709)
class CreatePackPackages < ActiveRecord::Migration
  def change
    create_table :pack_packages do |t|
      t.string :name
      t.string :folder
      t.datetime :license_date
      t.integer :cost

      t.timestamps 
    end
  end
end