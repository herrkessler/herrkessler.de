configure :development do
  activate :livereload
end

helpers do
  def classerize(text)
    text.gsub( /\W/, '-' ).downcase 
  end
end

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
  activate :relative_assets
  activate :imageoptim
  activate :gzip

  ignore "images/**/*.png"

end