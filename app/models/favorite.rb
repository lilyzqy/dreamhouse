class Favorite < ApplicationRecord
  validates :user_id, :picture_id, presence: true

  belongs_to :user,
  class_name: :User,
  primary_key: :id,
  foreign_key: :user_id

  belongs_to :picture,
  class_name: :Picture,
  primary_key: :id,
  foreign_key: :picture_id


end
