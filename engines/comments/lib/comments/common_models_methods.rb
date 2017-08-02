module Comments
	
	module CommonMethods
		
		extend ActiveSupport::Concern
			
	    	 # scope :preload_who, -> (relation) { where() }
	    	included do
	    		validates :user, :attachable,:text, presence: true
	 			belongs_to :attachable, :polymorphic => true    
	 			belongs_to :user  		
	      	end

	      		# def dddd relation,
	      		# 	joins(:attachable).where()
	      		# end
	      
	   	module ClassMethods
	   		def get_items arg
	   			if arg.is_a? ActiveRecord::Relation
		      		join_table = arg.table_name

		      		joins("INNER JOIN #{join_table} on #{join_table}.id = #{table_name}.attachable_id").merge arg

		      	elsif arg.is_a?  Array

		      		unless arg.count == 0 ||  arg.all? { |x| x.is_a? arg.first.class } 
		      			 raise ArgumentError, 'Argument must be an array of elements with the same class'
		      		end

		      		join_table = arg.first.class.table_name
		      		ids = arg.map(&:id).join(',')
		      		joins("INNER JOIN #{join_table} on (#{join_table}.id = #{table_name}.attachable_id AND #{join_table}.id in (#{ids})  )")
		      	elsif arg.respond_to? :id
		      		get_items [arg]
		      	elsif
		      		raise ArgumentError
		      	end
		      	

	      	end

	   	end	

		
	end

end