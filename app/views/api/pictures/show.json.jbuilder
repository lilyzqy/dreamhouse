json.extract! @picture, :id, :image_url

json.user_id @picture.user.id

json.project_id @picture.project.id
