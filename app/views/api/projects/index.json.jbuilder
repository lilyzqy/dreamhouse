@projects.each do |project|
  json.set! project.id do
    json.extract! project, :id, :title, :state, :city,:user_id
    json.set! 'project_pics_id', project.pictures.pluck(:id)
    if project.pictures != []
      json.set! 'cover_pic_url', project.pictures.first.image_url
    end
  end
end
