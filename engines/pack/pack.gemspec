$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "pack/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "pack"
  s.version     = Pack::VERSION
  s.authors     = ["Andrey Paokin"]
  s.email       = ["andrejpaokin@yandex.ru"]
  s.homepage    = "https://github.com/octoshell/octoshell-v2"
  s.summary     = "A pack engine for octoshell"
  s.description = "A pack engine for octoshell"
  s.license     = "MIT"

  s.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.rdoc"]
  s.test_files = Dir["test/**/*"]

  s.add_dependency "rails", "~> 4.2"
  s.add_dependency "activerecord-jdbcpostgresql-adapter"
  s.add_dependency "slim"
  s.add_dependency "bootstrap_form"
  s.add_dependency "maymay"
 

end