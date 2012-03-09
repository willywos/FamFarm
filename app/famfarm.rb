
require 'sinatra'
require 'sass'
require 'haml'

require_relative 'config'

get '/' do
	haml :index
end

get '/famfarm.css' do
	sass :famfarm
end

