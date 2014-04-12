source 'https://rubygems.org'

ruby '2.0.0'
gem 'rails', '4.0.0'
gem 'pg'
gem 'jbuilder', '~> 1.2'
gem 'will_paginate', '3.0.4'
gem 'bootstrap-will_paginate', '0.0.9'

group :production do
  gem 'unicorn'
  gem 'unicorn-rails'
end

group :assets do
  gem 'sass-rails', '~> 4.0.0'
  gem 'coffee-rails', '~> 4.0.0'
  gem 'uglifier', '>= 1.3.0'
  gem 'jquery-rails'
  gem 'bootstrap-sass', '>= 3.0.0.0'
  gem 'therubyracer', platforms: :ruby
end

group :development do
  gem 'pry-debugger'
  gem 'pry-rails'
  gem 'better_errors'
  # gem 'railroady'
  gem 'binding_of_caller', platforms: [:mri_19, :mri_20, :rbx]
end

group :test do
  gem 'rspec-rails'
  gem 'guard-rspec'
  gem 'factory_girl_rails'
  gem 'spork'
  gem 'factory_girl'
  gem "parallel_tests"
end
