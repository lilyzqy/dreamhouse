json.extract! @project, :id, :title, :state, :city, :user_id
json.set! 'project_pics_id', @project.pictures.pluck(:id)
