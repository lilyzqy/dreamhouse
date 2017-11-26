@projects.each do |project|
  json.set! project.id do
    json.extract! project, :id, :title, :state, :city
    json.set! 'cover_pic_url', project.pictures.first.image_url
  end
end
