json.extract! picture, :id, :image_url

if current_user
  json.favorited_by_current_user !!picture.favorites.find_by(user_id: current_user.id)
else
  json.favorited_by_current_user false
end
