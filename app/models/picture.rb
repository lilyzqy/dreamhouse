class Picture < ApplicationRecord
  validates :image_url, presence: true, uniqueness: true
  validates :user_id, :project_id, presence: true

  belongs_to
end
