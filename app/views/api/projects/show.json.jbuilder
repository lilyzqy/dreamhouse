json.extract! @project, :id, :title, :state, :city
json.set! 'project_pics_id', @project.pictures.pluck(:id)
