class PseudoFinalChanges < ActiveRecord::Migration
  def change
  	change_column :pack_accesses,:status,:string
  	remove_column :pack_accesses,:end_lic
  	add_column :pack_accesses,:end_lic,:date
  end
end