@users.each do |user|
  json.set! user.id do
    json.extract! user, :image_url, :username
  end
end
