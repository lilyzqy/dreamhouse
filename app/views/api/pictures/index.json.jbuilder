@pictures.each do |picture|
  json.set! picture.id do
    json.extract! picture, :id, :image_url
  end
end
