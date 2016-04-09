google_map = "#{Rails.root}/config/map.yml"
  if File.exists? google_map
    config = YAML.load_file(google_map)
    config.each { |key, value| ENV[key] = value.to_s }
  end
