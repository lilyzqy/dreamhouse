json.extract! picture, :id, :image_url

json.user_id picture.user.id

json.project_id picture.project.id

json.favorited_by_current_user !!picture.favorites.find_by(user_id: current_user.id)
