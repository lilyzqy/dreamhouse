json.partial! 'api/pictures/picture', picture: @picture

json.user_id @picture.user.id

json.project_id @picture.project.id
