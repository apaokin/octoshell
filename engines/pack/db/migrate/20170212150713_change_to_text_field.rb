class ChangeToTextField < ActiveRecord::Migration
  def change
  	change_column :pack_version_options,:value,:text  
  end
end