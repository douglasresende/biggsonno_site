BiggsonnoSite::Application.configure do
  config.cache_classes = true
  config.eager_load = true
  config.consider_all_requests_local       = false
  config.action_controller.perform_caching = true
  config.serve_static_assets = true
  config.assets.js_compressor = :uglifier
  config.assets.compile = false
  config.assets.digest = true
  config.assets.version = '1.0'
  config.log_level = :info
  config.action_mailer.default_url_options = {:host => "www.biggsonno.com.br"}
  config.action_mailer.delivery_method = :smtp
  config.action_mailer.smtp_settings = {
    :address              => "smtp.gmail.com",
    :port                 => 465,
    :domain               => 'biggsonno.com.br',
    :user_name            => ENV["GMAIL_USERNAME"],
    :password             => ENV["GMAIL_PASSWORD"],
    :authentication       => "plain",
    :tls                  => true
  }
  config.i18n.fallbacks = true
  config.active_support.deprecation = :notify
  config.assets.paths << Rails.root.join('app', 'assets')
  config.log_formatter = ::Logger::Formatter.new
end
