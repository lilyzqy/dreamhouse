json.extract! picture, :id, :image_url

json.favorited_by_current_user !!picture.favorites.find_by(user_id: current_user.id)
