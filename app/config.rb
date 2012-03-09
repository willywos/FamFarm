require 'sinatra'
require 'sinatra/base'  

configure do
  set :haml, :format => :html5
  set :public_folder, File.dirname(__FILE__) + '/public'
  set :static, true
  set :sass, :style => :compact
end


