@projects.each do |project|
  json.set! project.id do
    json.extract! project, :id, :title, :state, :city,:user_id
    json.set! 'project_pics_id', project.pictures.pluck(:id)
    if project.pictures != []
      json.set! 'cover_pic_url', project.pictures.first.image_url
    else
      json.set! 'cover_pic_url','https://images.unsplash.com/photo-1492371451031-f0830e91b3d9?auto=format&fit=crop&w=1122&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
    end
  end
end
