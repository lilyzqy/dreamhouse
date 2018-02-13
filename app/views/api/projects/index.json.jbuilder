@projects.each do |project|
  json.set! project.id do
    json.extract! project, :id, :title, :state, :city,:user_id
    json.set! 'project_pics_id', project.pictures.pluck(:id)
    if project.pictures != []
      json.set! 'cover_pic_url', project.pictures.first.image_url
    else
      json.set! 'cover_pic_url','http://res.cloudinary.com/dreamhousesf/image/upload/v1518545526/ae2ee1_798a7314e11d4df3a509952840479417_mv2_xpfwnh.gif'
    end
  end
end
