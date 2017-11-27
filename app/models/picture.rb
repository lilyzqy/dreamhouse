class Picture < ApplicationRecord
  validates :image_url, presence: true, uniqueness: true

  belongs_to :project,
  class_name: :Project,
  foreign_key: :project_id,
  primary_key: :id

  delegate :user, to: :project


end
